FROM clojure:temurin-21-tools-deps AS builder

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    apt-transport-https \
    gpg \
  && rm -rf /var/lib/apt/lists/*

# Install Node.js and yarn for db-sync build.
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && curl -fsSL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor > /etc/apt/trusted.gpg.d/yarn.gpg \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends nodejs yarn \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY deps/db-sync /app/deps/db-sync
COPY deps/common /app/deps/common
COPY deps/db /app/deps/db
COPY resources /app/resources

WORKDIR /app/deps/db-sync

RUN yarn install --production
RUN yarn build:node-adapter

FROM node:20-bullseye-slim

WORKDIR /app/deps/db-sync

COPY --from=builder /app/deps/db-sync /app/deps/db-sync

ENV DB_SYNC_PORT=8787

EXPOSE 8787

RUN chmod +x ./start.sh

CMD ["./start.sh"]
