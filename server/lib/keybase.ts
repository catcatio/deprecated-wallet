import { login } from 'keybase-login'
import { promisify } from 'util'

export default class Keybase {
  static _login = promisify(login)

  static async login(email_or_username, passphrase) {
    return Keybase._login({ username: email_or_username, passphrase })
  }
}