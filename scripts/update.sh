git pull
ls
docker exec -it $(docker ps -a -q --filter ancestor=catcatio/wallet) npm i
