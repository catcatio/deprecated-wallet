# Build with TypeScript
FROM catcatio/builder AS builder

FROM keymetrics/pm2:8-alpine

WORKDIR /usr/app

COPY --from=builder /usr/local/bin/node /usr/local/bin/
COPY --from=builder /usr/lib/ /usr/lib/
COPY --from=builder /usr/app .

COPY . .

RUN npm i -g nodemon

# For development
VOLUME ["/usr/app/.env", "/usr/app/server", "/usr/app/pages", "/usr/app/lib"]

# CMD [ "pm2-runtime", "start", "pm2.json", "--watch" ]