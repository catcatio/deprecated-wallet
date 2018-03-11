FROM node:8-alpine
ENV NODE_ENV develop

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk add --no-cache --virtual .build-deps python make g++

# App
COPY package.json /tmp/package.json
RUN npm config set registry https://registry.npmjs.org/ && \
  cd /tmp && \
  npm i --quiet --depth 0 --no-shrinkwrap --unsafe-perm && \
  cd / && mkdir -p /usr/app && \
  cp -a /tmp/node_modules /usr/app/ && \
  rm -rf /tmp && \
  npm i -g typescript && \
  apk del .build-deps

WORKDIR /usr/app

VOLUME ["/usr/app"]

ENTRYPOINT ["tsc"]
