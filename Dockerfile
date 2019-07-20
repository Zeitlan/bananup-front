FROM node:12-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
COPY serve.json .
CMD ["serve", "-p", "80", "-c", "serve.json", "-s", "."]