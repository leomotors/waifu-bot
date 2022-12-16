FROM node:18-alpine as builder

RUN apk add --no-cache libc6-compat
RUN apk update

RUN npm i --location=global pnpm

WORKDIR /cunny

COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# Copy Every Important Stuff
COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:18-alpine

WORKDIR /app

RUN npm i --location=global pnpm

COPY --from=builder /cunny/node_modules ./node_modules
COPY --from=builder /cunny/apps ./apps
COPY --from=builder /cunny/packages/constants ./packages/constants
COPY --from=builder /cunny/pnpm-workspace.yaml ./
COPY --from=builder /cunny/package.json ./
COPY --from=builder /cunny/turbo.json ./

EXPOSE 5374 5375

CMD ["pnpm", "start:server"]