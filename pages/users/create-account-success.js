import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { username } }) {
    return { username }
  }

  render () {
    const { username } = this.props
    return (
      <div>
        <p>username:{username}</p>
      </div>
    )
  }
}
