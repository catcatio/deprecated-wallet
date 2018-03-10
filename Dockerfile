# Build with TypeScript
FROM tsc:latest as builder
COPY . .
RUN tsc

FROM keymetrics/pm2:8-alpine

# Environments
ENV NODE_ENV develop

COPY package.json /tmp/package.json
RUN npm config set registry https://registry.npmjs.org/ && \
  cd /tmp && \
  npm i --quiet --depth 0 --no-shrinkwrap --unsafe-perm && \
  cd / && \
  mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app/ && \
  rm -rf /tmp
WORKDIR /usr/app

# Source
COPY --from=builder /usr/app .

# For development
VOLUME ["/usr/app/.env", "/usr/app/server", "/usr/app/pages", "/usr/app/lib"]

# CMD [ "pm2-runtime", "start", "pm2.json", "--watch" ]