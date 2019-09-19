FROM node:12-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN INLINE_RUNTIME_CHUNK=false npm run build

FROM node:12-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
COPY serve.json .
COPY env2js.sh .
COPY entrypoint.sh .
CMD ["./entrypoint.sh"]
