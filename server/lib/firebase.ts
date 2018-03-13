import admin from 'firebase-admin'
import { encrypt, decrypt } from './aes'

const init = () => {
  const serviceAccount = require("./serviceAccountKey.json")
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://catcatchatbot.firebaseio.com"
  })
}

const linkProviderAndUIDWithPublicKey = async (provider, id, type, encryptedPublicKey) => {
  init()

  const firestore = admin.firestore()
  const collection = firestore.collection(provider)
  const ref = collection.doc(id)
  const data = {
    [type]: encryptedPublicKey
  }

  await ref.set(data)

  return { id }
}

export const linkMessengerWithStellar = (psid, publicKey, masterKey) => {
  const encryptedPublicKey = encrypt(publicKey, masterKey)
  return linkProviderAndUIDWithPublicKey('messenger', psid, 'xlm', encryptedPublicKey)
}