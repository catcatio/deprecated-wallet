if [ ! -d wallet ]; then
  git clone "https://github.com/catcatio/wallet.git"
  cd wallet
else
  cd wallet
  git pull
fi

ls

export NODE_ENV=development
docker build --no-cache -t catcatio/wallet .
docker-compose build
docker-compose kill
docker-compose down
docker-compose up -d
docker ps
docker exec -it $(docker ps -a -q --filter ancestor=catcatio/wallet) npm i
docker exec -it $(docker ps -a -q --filter ancestor=catcatio/wallet) npm run mon