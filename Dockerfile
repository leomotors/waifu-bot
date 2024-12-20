# ? -------------------------
# ? Builder: Build dependencies like @discordjs/opus and everything
# ? -------------------------

FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache python3 make g++

COPY . ./
RUN corepack enable

RUN pnpm i --frozen-lockfile

ENV INTERNAL_SECRET=tempmockvalue
ENV JWT_SECRET=tempmockvalue

RUN pnpm build

# ? -------------------------
# ? Runner: Copy stuff from builder to save spaces from added apk packages
# ? -------------------------

FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable

USER node
COPY --chown=node:node --from=builder /app .

# Install pnpm by invoking corepack
RUN pnpm --version

ENV NODE_ENV=production
ENV ENVIRONMENT=PRODUCTION
EXPOSE 7100
CMD ["pnpm", "start"]
