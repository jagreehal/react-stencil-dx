import React from 'react'

import {render} from '@testing-library/react'
import App from './App'

it('can find web component', async () => {
  const { container } = render(<App />)
  const component = container.querySelector('my-component');
  
  expect(component).not.toBe(null);
  expect(component).toHaveAttribute('first', 'Jag')
  expect(component).toHaveAttribute('last', 'Reehal')
})