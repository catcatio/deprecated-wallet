# Replace with local
scp .env root@188.166.241.151:~/wallet/.env
scp package.json root@188.166.241.151:~/wallet/package.json
scp Dockerfile root@188.166.241.151:~/wallet/Dockerfile
scp docker-compose.yml root@188.166.241.151:~/wallet/docker-compose.yml
# scp ./src/app.js root@188.166.241.151:~/wallet/src/app.js
# scp nodemon.json root@188.166.241.151:~/wallet/nodemon.json

# ssh root@188.166.241.151 "cat ~/wallet/docker-compose.yml"

ssh root@188.166.241.151 "export NODE_ENV=development && \
cd ~/wallet && \
NODE_ENV=development docker build -f builder.Dockerfile -t catcatio/builder . && \
NODE_ENV=production docker build --no-cache -t catcatio/wallet . && \
docker-compose kill && \
docker-compose down && \
docker-compose up"
