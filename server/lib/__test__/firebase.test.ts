/* eslint-env jest */
require('../../../pre')

describe('Firebase', () => {
  it('can link Messenger with Stellar', async () => {
    const { linkMessengerWithStellar } = require('../firebase')

    const masterKey = 'foo'
    const psid = '11223344'
    const publicKey = 'GABC'

    const docRef = await linkMessengerWithStellar(psid, publicKey, masterKey)
    expect(docRef.id).toBeDefined()
  })
})
