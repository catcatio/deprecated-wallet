const aesjs = require('aes-js');

const padding = key => {
  let keys = ('' + key).split('').map(i => Number(i))
  for (let i = 0; i < 16; i++) {
    keys[i] = keys[i] || i + 1
  }
  return keys
}

export const encrypt = (text, key) => {
  key = padding(key)
  const textBytes = aesjs.utils.utf8.toBytes(text)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const encryptedBytes = aesCtr.encrypt(textBytes)
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes)

  return encryptedHex
}

export const decrypt = (encryptedHex, key) => {
  key = padding(key)
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex)
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5))
  const decryptedBytes = aesCtr.decrypt(encryptedBytes)
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes)
  return decryptedText
}