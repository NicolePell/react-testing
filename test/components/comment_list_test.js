import { renderComponent, expect } from '../test_helper'

import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let commentList

  beforeEach(() => {
    const comments = { comments: ['Prow scuttle', 'Sail ho shrouds']}
    commentList = renderComponent(CommentList, null, comments)
  })

  it('shows an <li> for each comment', () => {
    expect(commentList.find('li').length).to.equal(2)
  })

  it('shows each comment that is provided', () => {
    expect(commentList).to.contain('Prow scuttle')
    expect(commentList).to.contain('Sail ho shrouds')
  })
})
