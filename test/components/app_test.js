import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App renders correctly', () => {

  it('shows the correct test', () => {
    const component = renderComponent(App)

    expect(component).to.contain('Yar Pirate!')
  })

})
