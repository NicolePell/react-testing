import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveComment } from '../actions'

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: ' '}
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.actions.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button>Submit comment</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ saveComment }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CommentBox)
