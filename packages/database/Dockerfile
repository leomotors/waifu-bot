FROM node:20-alpine as builder

WORKDIR /app
COPY prisma ./prisma

RUN npm i -g prisma

CMD ["npx", "prisma", "migrate", "deploy"]
