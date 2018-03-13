import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { username, password, password2, redirectURI, errorMessage, errorInput } }) {
    return { username, password, password2, redirectURI, errorMessage, errorInput }
  }

  render () {
    const { username, password, password2, redirectURI, errorMessage, errorInput } = this.props
    return (
      <div>
        <p>username:{username}</p>
        <p>password:{password}</p>
        <p>password2:{password2}</p>
        <p>redirectURI:{redirectURI}</p>
        <p>errorMessage:{errorMessage}</p>
        <p>errorInput:{errorInput}</p>
      </div>
    )
  }
}
