if [ ! -d wallet ]; then
  git clone "https://github.com/catcatio/wallet.git"
  cd wallet
else
  cd wallet
  git pull
fi

ls
