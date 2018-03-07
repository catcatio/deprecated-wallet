# wallet
CatCat ChatBot hot wallets

## Alpha version
### v0.1.0 : Init wallet
> Secure level 1 : all trusted server
- [x] Server on DigitalOcean.
- [x] It should say greeting.
- [ ] It should ask user to `create` wallet `Stellar`.
- [ ] It should `create` blank `XLM` wallet and encrypted with master key.
- [ ] It should return wallet public key after generated.
- [ ] It should describe how to activate the wallet.
- [ ] It should describe how to get wallet information.
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
### v0.2.0 : Use wallet
- [ ] It should describe to `Alice` how to send and request `XLM`
- [ ] It should ask `Alice` to `send` `XLM` to `Bob`
- [ ] It should generated `send` link for `Alice` and `share` to `Bob`.
- [ ] It should able to handle `send` link from `Bob`.
- [ ] It should describe `Bob` how to accept `XLM`

### v0.3.0 : Notifications
- [ ] It should notify when wallet amount change (interval 1 minute).

### v0.4.0 : Pin
> Secure level 2 : Will need both client and server key
- [ ] It should ask user for enter PIN for encryption.
- [ ] It should encrypt with PIN and master key.
- [ ] It should decrypt with PIN and master key.

