import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let commentBox

  beforeEach(() => {
    commentBox = renderComponent(CommentBox)
  })

  it('has the correct class', () => {
    expect(commentBox).to.have.class('comment-box')
  })

  it('has a text area', () => {
    expect(commentBox).to.have.class('comment-box')
    expect(commentBox.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(commentBox.find('button')).to.exist
  })

  describe('using the CommentBox', () => {
    beforeEach(() => {
      commentBox.find('textarea').simulate('change', 'Hornswaggle Yellow Jack.')
    })

    it('shows text when entering in the textarea', () => {
      expect(commentBox.find('textarea')).to.have.value('Hornswaggle Yellow Jack.')
    })

    it('clears the from when submitted', () => {

    })
  })
})
