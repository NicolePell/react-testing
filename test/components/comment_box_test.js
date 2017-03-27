import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let commentBox

  beforeEach(() => {
    commentBox = renderComponent(CommentBox)
  })

  it('has a text area', () => {
    expect(commentBox).to.have.class('comment-box')
    expect(commentBox.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(commentBox.find('button')).to.exist
  })
})
