FROM keymetrics/pm2:8-alpine

# Setup work dir
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Bundle APP files
COPY . .

# For development
VOLUME ["/usr/app/src", "/usr/app/node_modules"]

# CMD [ "pm2-runtime", "start", "pm2.json", "--watch" ]