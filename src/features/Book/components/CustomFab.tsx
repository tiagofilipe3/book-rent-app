import React, { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Action, Fab } from 'react-tiny-fab'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router'

import { TCustomFab } from '../types'
import { fabButtonStyles } from './styles'
import { ReactComponent as PlusIcon } from '../../../assets/images/plus.svg'
import { ReactComponent as PenIcon } from '../../../assets/images/pen.svg'

const CustomFab: FC<TCustomFab> = ({
  checked,
  handleRentConfirmation,
  handleDeleteConfirmation,
}) => {
  const intl = useIntl()
  const history = useHistory()
  const [canRent, setCanRent] = useState<boolean>(false)
  const [cantEditOrDelete, setCanEditOrDelete] = useState<boolean>(false)

  // const handleEdit = () => {
  //   const selected = rows.filter((row) => row.selected)
  //
  //   if (selected.length > 1) {
  //     alert('Selecione apenas um para editar')
  //   } else if (selected.length === 0) {
  //     alert('Selecione pelo menos um para editar')
  //   } else {
  //     history.push({
  //       pathname: '/qrCodeForm',
  //       state: { qrCode: selected[0] },
  //     })
  //   }
  // }

  useEffect(() => {
    if (checked) {
      const hasSomeRented = checked.some((book) => book.rented)

      setCanRent(!hasSomeRented)
      setCanEditOrDelete(checked.length === 1 && !hasSomeRented)
    }
  }, [checked])

  const handleEdit = () => {
    history.push({
      pathname: '/bookForm',
      state: { book: checked ? checked[0] : null },
    })
  }

  return (
    <Fab
      icon={<PlusIcon style={{ fill: '#fff', width: '1em', height: '1em' }} />}
      alwaysShowTitle={true}
      mainButtonStyles={{
        backgroundColor: '#013243',
      }}
      event="click"
    >
      <Action
        text={intl.formatMessage({ id: 'fab.delete' })}
        style={{
          backgroundColor: '#02E079',
          opacity: cantEditOrDelete ? 1 : 0.5,
          cursor: cantEditOrDelete ? 'pointer' : 'initial',
        }}
        onClick={handleDeleteConfirmation}
        css={{
          backgroundColor: '#02e079',
        }}
        // @ts-ignore
        disabled={!canRent}
      >
        <PenIcon style={fabButtonStyles} />
      </Action>
      <Action
        text={intl.formatMessage({ id: 'fab.rent' })}
        style={{
          backgroundColor: '#02E079',
          opacity: canRent ? 1 : 0.5,
          cursor: canRent ? 'pointer' : 'initial',
        }}
        onClick={handleRentConfirmation}
        css={{
          backgroundColor: '#02e079',
        }}
        // @ts-ignore
        disabled={!canRent}
      >
        <PenIcon style={fabButtonStyles} />
      </Action>
      <Action
        onClick={handleEdit}
        text={intl.formatMessage({ id: 'fab.edit' })}
        style={{
          backgroundColor: '#02E079',
          opacity: cantEditOrDelete ? 1 : 0.5,
          cursor: cantEditOrDelete ? 'pointer' : 'initial',
        }}
        // @ts-ignore
        disabled={!cantEditOrDelete}
      >
        <PenIcon style={fabButtonStyles} />
      </Action>
      <Action
        text={intl.formatMessage({ id: 'fab.new' })}
        style={{
          backgroundColor: '#02E079',
        }}
        onClick={() => history.push('/bookForm')}
        // @ts-ignore
      >
        <AddIcon style={fabButtonStyles} />
      </Action>
    </Fab>
  )
}

export { CustomFab }
