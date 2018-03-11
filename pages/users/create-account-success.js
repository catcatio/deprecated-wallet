import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
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
