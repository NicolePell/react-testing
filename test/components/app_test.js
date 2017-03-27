import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App', () => {
  let app

  beforeEach(() => {
    app = renderComponent(App)
  })

  it('show a comment box', () => {
    expect(app.find('.comment-box')).to.exist
  })
})
