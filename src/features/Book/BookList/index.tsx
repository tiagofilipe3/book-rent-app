import React, { FC, useEffect, useState } from 'react'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Flex } from 'reflexbox'
import {
  Modal,
  Input,
  List,
  Checkbox,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'
import {
  cellTableStyles,
  getModalStyle,
  tableStyles,
  useListItemStyles,
  useListStyles,
  useModalStyles,
} from './styles'
import { FormattedMessage, useIntl } from 'react-intl'

import { deleteBook, rentBook } from '../ducks'
import { TBook } from '../types'
import { Tag } from '../../../components/Tag'
import { Text } from '../../../components/Text'
import { CustomFab } from '../components/CustomFab'
import { TBookList, TBookListReducers } from './types'
import { ConfirmRentDialog } from '../../../components/ConfirmRentDialog'
import { ConfirmDeleteDialog } from '../../../components/ConfirmDeleteDialog'

const mapStateToProps = ({ BookReducer }: TBookListReducers) => ({
  bookList: BookReducer.bookList,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ rentBook, deleteBook }, dispatch)

const BookList: FC<TBookList> = ({ bookList, rentBook, deleteBook }) => {
  const [search, setSearch] = useState<string>()
  const [rows, setRows] = useState<TBook[]>()
  const [open, setOpen] = React.useState(false)
  const [confirmRentOpen, setConfirmRentOpen] = React.useState(false)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false)
  const [originalRows, setOriginalRows] = useState<TBook[]>([])
  const [bookDetail, setBookDetail] = useState<TBook>()
  const [bookToRent, setBookToRent] = useState<TBook[]>()
  const [bookToDelete, setBookToDelete] = useState<TBook | undefined>()
  const [checked, setChecked] = useState<TBook[]>()

  const [modalStyle] = useState(getModalStyle)
  const modalClasses = useModalStyles()
  const listItemClasses = useListItemStyles()
  const listClasses = useListStyles()
  const intl = useIntl()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!search && originalRows.length > 0) {
        setRows(originalRows)
        return
      }

      if (search) {
        const newRows = originalRows.filter((row) => {
          const searchLowercase = search.toLowerCase()

          return (
            row.id.toString().includes(searchLowercase) ||
            row.title.toLowerCase().includes(searchLowercase)
          )
        })

        setRows(newRows)
      }
    }, 150)

    return () => clearTimeout(delayDebounceFn)
  }, [search, originalRows])

  useEffect(() => {
    setOriginalRows(bookList)
    setRows(bookList)
    setChecked([])
  }, [bookList])

  const handleToggle = (book: TBook) => () => {
    const currentIndex = checked ? checked.indexOf(book) : -1
    const newChecked = checked ? [...checked] : []

    if (currentIndex === -1) {
      newChecked.push(book)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleRentConfirmation = () => {
    setConfirmRentOpen(true)

    if (checked) {
      setBookToRent(checked)
    }
  }

  const handleRentBook = () => {
    if (bookToRent) {
      rentBook(originalRows, bookToRent).then(() => {
        setConfirmRentOpen(false)
      })
    }
  }

  const handleDeleteConfirmation = () => {
    setConfirmDeleteOpen(true)

    if (checked) {
      setBookToDelete(checked[0])
    }
  }

  const handleDeleteBook = () => {
    if (bookToDelete) {
      deleteBook(originalRows, bookToDelete.id).then(() => {
        setConfirmDeleteOpen(false)
      })
    }
  }

  return (
    <Flex width="100%" justifyContent="center" mt="50px">
      <Flex width="80%" flexDirection="column">
        <Flex justifyContent="space-between">
          <Flex alignSelf="flex-start">
            <Text fontFamily="Roboto" fontSize="24px" color="#013243">
              <FormattedMessage id="books" />
            </Text>
          </Flex>
          <Flex width="12em">
            <Input
              placeholder={intl.formatMessage({ id: 'search' })}
              fullWidth
              style={{ fontSize: '16px' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex mt="10px">
          <List className={listClasses.root}>
            {rows &&
              rows.map((book) => {
                return (
                  <ListItem className={listItemClasses.root} key={book.id}>
                    <ListItemIcon>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(book)}
                        checked={checked && checked.indexOf(book) !== -1}
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItem
                      button
                      onClick={() => {
                        setBookDetail(book)
                        setOpen(true)
                      }}
                      style={{
                        flexDirection: 'column',
                        border: '1px solid #e4e4e4',
                        borderRadius: 12,
                      }}
                    >
                      <ListItem>
                        <Flex
                          width="100%"
                          justifyContent="space-between"
                          css={tableStyles}
                        >
                          {/* Código */}
                          <Flex
                            flex={1}
                            flexDirection="column"
                            css={cellTableStyles}
                          >
                            <Text fontFamily="Roboto" fontSize="1.1em">
                              <FormattedMessage id="bookCode" />
                            </Text>
                            <Flex height="100%" alignItems="center">
                              <Text
                                fontFamily="Roboto"
                                fontSize="1.1em"
                                mt="8px"
                              >
                                {book.id}
                              </Text>
                            </Flex>
                          </Flex>

                          {/* Titulo */}
                          <Flex
                            flexDirection="column"
                            flex={3}
                            css={cellTableStyles}
                          >
                            <Text fontFamily="Roboto" fontSize="1.1em">
                              <FormattedMessage id="book.title" />
                            </Text>
                            <Flex height="100%" alignItems="center">
                              <Text
                                fontFamily="Roboto"
                                fontSize="1.1em"
                                mt="8px"
                              >
                                {book.title}
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex flexDirection="column" flex={1}>
                            <Flex flexDirection="column" width="100%">
                              <Flex flexWrap="wrap">
                                <Tag
                                  color={book.rented ? '#8D909B' : '#02E079'}
                                >
                                  <FormattedMessage
                                    id={
                                      book.rented
                                        ? 'book.unavailable'
                                        : 'book.available'
                                    }
                                  />
                                </Tag>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </ListItem>
                    </ListItem>
                  </ListItem>
                )
              })}
          </List>
        </Flex>
      </Flex>
      <CustomFab
        rows={rows}
        checked={checked}
        handleRentConfirmation={handleRentConfirmation}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={modalClasses.paper}>
          <Flex flexDirection="column">
            <Flex alignItems="center">
              <Text fontFamily="Roboto" fontSize="1em" mr="5px">
                <FormattedMessage id="book.title" />:
              </Text>
              <Text fontFamily="Roboto" fontSize="1em">
                {bookDetail && bookDetail.title}
              </Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Text fontFamily="Roboto" fontSize="1em" mr="5px">
                <FormattedMessage id="book.author" />:
              </Text>
              <Text fontFamily="Roboto" fontSize="1em">
                {bookDetail && bookDetail.author}
              </Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Text fontFamily="Roboto" fontSize="1em" mr="5px">
                <FormattedMessage id="book.publishingCompany" />:
              </Text>
              <Text fontFamily="Roboto" fontSize="1em">
                {bookDetail && bookDetail.publishingCompany}
              </Text>
            </Flex>
          </Flex>
        </div>
      </Modal>
      <ConfirmRentDialog
        isOpen={confirmRentOpen}
        handleClose={() => {
          setConfirmRentOpen(false)
          setBookToRent(undefined)
        }}
        handleRentBook={handleRentBook}
      />
      <ConfirmDeleteDialog
        isOpen={confirmDeleteOpen}
        handleClose={() => setConfirmDeleteOpen(false)}
        handleDeleteBook={handleDeleteBook}
      />
    </Flex>
  )
}

const enhance = compose<FC>(connect(mapStateToProps, mapDispatchToProps))

export default enhance(BookList)
