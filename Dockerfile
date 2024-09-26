
FROM oven/bun:1 as builder

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build


FROM oven/bun:1 as prod-deps-installer

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --production --frozen-lockfile


FROM oven/bun:1-slim as server

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=prod-deps-installer /app/node_modules ./node_modules
