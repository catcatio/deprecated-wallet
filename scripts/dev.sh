# Replace with local
scp .env root@188.166.241.151:~/wallet/.env
#scp package.json root@188.166.241.151:~/wallet/package.json
scp Dockerfile root@188.166.241.151:~/wallet/Dockerfile
scp docker-compose.yml root@188.166.241.151:~/wallet/docker-compose.yml
# scp ./src/app.js root@188.166.241.151:~/wallet/src/app.js

# ssh root@188.166.241.151 "cat ~/wallet/docker-compose.yml"

ssh root@188.166.241.151 "export NODE_ENV=development && \
cd ~/wallet/ && \
docker build --no-cache -t catcatio/wallet . && \
docker-compose build && \
docker-compose kill && \
docker-compose down && \
docker-compose up"
