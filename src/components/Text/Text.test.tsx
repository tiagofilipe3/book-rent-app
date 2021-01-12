import React from 'react'

import { renderWithReactIntl } from '../../utils/renderWithReactIntl'
import { Text } from '.'

describe('Tag', () => {
  it('renders', () => {
    const { getByText } = renderWithReactIntl(<Text>Text</Text>)

    getByText('Text')
  })
})
