FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache python3 make g++

COPY . ./
RUN corepack enable

RUN pnpm i --frozen-lockfile

RUN pnpm build

ENV NODE_ENV production
CMD ["pnpm", "start"]
