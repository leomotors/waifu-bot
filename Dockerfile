# ? -------------------------
# ? Builder: Build dependencies like @discordjs/opus and everything
# ? -------------------------

FROM node:18-alpine as builder

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache python3 make g++

COPY . ./
RUN corepack enable

RUN pnpm i --frozen-lockfile

RUN pnpm build

# ? -------------------------
# ? Runner: Copy stuff from builder to save spaces from added apk packages
# ? -------------------------
FROM node:18-alpine as runner

WORKDIR /app

RUN corepack enable

USER node
COPY --chown=node:node --from=builder /app .

# Install pnpm by invoking corepack
RUN pnpm --version

ENV NODE_ENV production
CMD ["pnpm", "start"]
