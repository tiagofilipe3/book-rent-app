import React from 'react'

import { renderWithReactIntl } from '../../utils/renderWithReactIntl'
import { Tag } from '.'

describe('Tag', () => {
  it('renders', () => {
    const { getByText } = renderWithReactIntl(<Tag>Tag</Tag>)

    getByText('Tag')
  })
})
