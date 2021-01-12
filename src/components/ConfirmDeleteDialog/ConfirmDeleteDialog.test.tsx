import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ConfirmDeleteDialog } from '.'
import { renderWithReactIntl } from '../../utils/renderWithReactIntl'

describe('Confirm delete dialog', () => {
  it('opens', () => {
    const deleteMock = jest.fn()
    const setOpenMock = jest.fn()

    const { getByText } = renderWithReactIntl(
      <ConfirmDeleteDialog
        isOpen
        handleDeleteBook={deleteMock}
        handleClose={setOpenMock}
      />
    )

    getByText('Delete confirmation')
  })

  it('deletes', () => {
    const deleteMock = jest.fn()
    const setOpenMock = jest.fn()

    renderWithReactIntl(
      <ConfirmDeleteDialog
        isOpen
        handleDeleteBook={deleteMock}
        handleClose={setOpenMock}
      />
    )

    userEvent.click(screen.getByText('Yes'))
    expect(deleteMock).toHaveBeenCalled()
  })
})
