import React, { FC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { TConfirmDeleteDialog } from './types'
import { FormattedMessage } from 'react-intl'
import { Text } from '../Text'

const ConfirmDeleteDialog: FC<TConfirmDeleteDialog> = ({
  isOpen,
  handleClose,
  handleDeleteBook,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Text fontFamily="Roboto" fontSize="1.1em">
          <FormattedMessage id="book.deleteConfirmation" />
        </Text>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Text fontFamily="Roboto" fontSize="1.1em">
            <FormattedMessage id="book.deleteConfirmationMessage" />
          </Text>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteBook} color="primary">
          <Text fontFamily="Roboto" fontSize="1.1em">
            <FormattedMessage id="yes" />
          </Text>
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          <Text fontFamily="Roboto" fontSize="1.1em">
            <FormattedMessage id="no" />
          </Text>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { ConfirmDeleteDialog }
