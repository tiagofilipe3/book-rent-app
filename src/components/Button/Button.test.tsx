import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('renders successfully', () => {
    const { getByText } = render(<Button>Button</Button>)

    getByText('Button')
  })

  it('fires click function', () => {
    const clickMock = jest.fn()

    render(<Button onClick={clickMock}>Button</Button>)
    userEvent.click(screen.getByRole('button'))

    expect(clickMock).toHaveBeenCalled()
  })
})
