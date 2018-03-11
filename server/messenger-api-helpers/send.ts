// ===== MESSENGER =============================================================
const api = require('./api')
const messages = require('./messages')

// ===== STORES ================================================================

// Turns typing indicator on.
const typingOn = recipientId => {
  return {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_on' // eslint-disable-line camelcase
  }
}

// Turns typing indicator off.
const typingOff = recipientId => {
  return {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_off' // eslint-disable-line camelcase
  }
}

// Wraps a message json object with recipient information.
const messageToJSON = (recipientId, messagePayload) => {
  return {
    recipient: {
      id: recipientId
    },
    message: messagePayload
  }
}

// Send one or more messages using the Send API.
const sendMessage = (recipientId, messagePayloads) => {
  console.log(' * sendMessage')
  const castArray = require('lodash/castArray')
  const messagePayloadArray = castArray(messagePayloads).map(messagePayload => messageToJSON(recipientId, messagePayload))

  api.callMessagesAPI([typingOn(recipientId), ...messagePayloadArray, typingOff(recipientId)])
}

// Send a welcome message for a non signed-in user.
const sendLoggedOutWelcomeMessage = recipientId => {
  sendMessage(recipientId, [
    {
      text: 'Hi! 👋 Welcome to CatCat wallet'
    },
    messages.createAccountMessage
  ])
}

// Send a welcome message for a signed in user.
const sendLoggedInWelcomeMessage = (recipientId, username) => {
  sendMessage(recipientId, [messages.napMessage, messages.loggedInMessage(username)])
}

// Send a different Welcome message based on if the user is logged in.
const sendWelcomeMessage = recipientId => {
  const UserStore = require('../stores/user_store')
  const isEmpty = require('lodash/isEmpty')
  const userProfile = UserStore.instance.getByMessengerId(recipientId)
  if (!isEmpty(userProfile)) {
    console.log(' * send.sendLoggedOutWelcomeMessage')
    sendLoggedInWelcomeMessage(recipientId, userProfile.username)
  } else {
    console.log(' * send.sendLoggedOutWelcomeMessage')
    sendLoggedOutWelcomeMessage(recipientId)
  }
}

// Send a successfully signed in message.
const sendSignOutSuccessMessage = recipientId => sendMessage(recipientId, messages.signOutSuccessMessage)

// Send a successfully signed out message.
const sendSignInSuccessMessage = (recipientId, username) => {
  sendMessage(recipientId, [messages.signInGreetingMessage(username), messages.signInSuccessMessage])
}

// Send a read receipt to indicate the message has been read
const sendReadReceipt = recipientId => {
  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: 'mark_seen' // eslint-disable-line camelcase
  }

  api.callMessagesAPI(messageData)
}

module.exports = {
  sendMessage,
  sendWelcomeMessage,
  sendSignOutSuccessMessage,
  sendSignInSuccessMessage,
  sendReadReceipt
}
