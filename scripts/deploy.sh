if [ ! -d wallet ]; then
  git clone "https://github.com/catcatio/wallet.git"
  cd wallet
else
  cd wallet
  git reset --hard HEAD
  git clean -f -d
  git pull
fi

ls
