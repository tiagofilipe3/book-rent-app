import React from 'react'

import { ConfirmRentDialog } from '.'
import { renderWithReactIntl } from '../../utils/renderWithReactIntl'
import { ConfirmDeleteDialog } from '../ConfirmDeleteDialog'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

describe('Confirm Rent dialog', () => {
  it('opens', () => {
    const rentMock = jest.fn()
    const setOpenMock = jest.fn()

    const { getByText } = renderWithReactIntl(
      <ConfirmRentDialog
        isOpen
        handleClose={setOpenMock}
        handleRentBook={rentMock}
      />
    )

    getByText('Confirm the rent of the book?')
  })

  it('rents', () => {
    const rentMock = jest.fn()
    const setOpenMock = jest.fn()

    renderWithReactIntl(
      <ConfirmDeleteDialog
        isOpen
        handleDeleteBook={rentMock}
        handleClose={setOpenMock}
      />
    )

    userEvent.click(screen.getByText('Yes'))
    expect(rentMock).toHaveBeenCalled()
  })
})
