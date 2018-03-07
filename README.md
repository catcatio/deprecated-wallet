# wallet
CatCat ChatBot hot wallets

# Install
```shell
# Stellar
brew install python@2
brew install pyenv
pyenv install 2.7.14
pyenv local 2.7.14
```

## Alpha version : Basic wallet CRUD
### v0.1.0 : Init wallet
- [x] Server on DigitalOcean.
- [x] It should say greeting.
- [ ] It should provide term and condition.
- [ ] It should check user state (`NEW`, `LINKED`, `ACTIVATED`).
- [ ] It should ask user to create `XLM` wallet for `NEW` user.
  ```
  BOT : Hi, Let's link Stellar wallet to your account
      : [Link]
  ```
- [ ] It should `create` blank `XLM` wallet on local side via web view.
- [ ] It should return wallet public key/secret after generated.
- [ ] It should let user enter `PIN` for encryption.
- [ ] It should encrypt with `PIN` when do form submit.
- [ ] It should encrypt with master key and save to database.
- [ ] It should describe how to get wallet information.
  ```
  BOT : Your Messenger has been link with Stellar, wanna see your wallet?
      : [wallet (=)]
  ```
- [ ] It should check current state of wallet (not activate/activated).
  ```
  BOT : It seem like you didn't activate Stellar's account yet
      : Please send at least 1 lumen (XLM) to this account.
      : [show me how (?)]
  ```
- [ ] It should describe how to activate the wallet when need.
- [ ] It should show wallet information.
  ```
  BOT : You've : 1 XLM = $0.34
  ```
```
{
  messenger: {
    psid: 1234,
    xlm: {
      publicKey: encrypted(G123, master_key),
      secretKey : encrypted(S123, master_key)
    }
  }
}
```
### v0.2.0 : Send/Request lumen
- [ ] It should describe to `Alice` how to send and request `XLM`
- [ ] It should ask `Alice` to `send` `XLM` to `Bob`
- [ ] It should generated `send` link for `Alice` and `share` to `Bob`.
- [ ] It should able to handle `send` link from `Bob`.
- [ ] It should describe `Bob` how to accept `XLM`

### v0.3.0 : Notifications
- [ ] It should notify when wallet amount change (interval 1 minute).

### v0.5.0
- [ ] Correct failed case.

### v0.4.0
- [ ] TBD

## TODO
- [ ] HA MongoDB : https://github.com/smartsdk/mongo-rs-controller-swarm
- [ ] Move to Google Cloud if get funding.

## Security Check list
- [x] 2 Factor DNS, Server
- [x] SSH only, Strict permissions, UFW
- [ ] A Grade SSL, Header
- [ ] Use Docker secret
- [ ] CORS, Helmet
- [ ] Encrypted server with master key
- [ ] Encrypted local with user pin
- [ ] Authen MongoDB
- [ ] Integrity check with other DB