
# FROM node:current as builder_os

# WORKDIR /

# RUN curl -fsSL https://bun.sh/install | bash

# ENV PATH="/root/.bun/bin:${PATH}"

# RUN bun --version

FROM oven/bun:1 as builder
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
RUN bun run build


FROM oven/bun:1 as prod-deps-installer
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --production --frozen-lockfile


FROM node:alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=prod-deps-installer /app/node_modules ./node_modules
ENTRYPOINT ["tail", "-f", "/dev/null"]

# CMD ["bun", "run", "server.ts"];