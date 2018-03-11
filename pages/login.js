import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

  render () {
    const { redirectURI, username, password, errorMessage, errorInput } = this.props
    return (
      <div>
        <p>redirectURI:{redirectURI}</p>
        <p>username:{username}</p>
        <p>password:{password}</p>
        <p>errorMessage:{errorMessage}</p>
        <p>errorInput:{errorInput}</p>
      </div>
    )
  }
}
