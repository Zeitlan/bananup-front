FROM node:10-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
RUN npm build

FROM node:10-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]