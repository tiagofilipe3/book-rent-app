import React, { FC, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useForm } from 'react-hook-form'
import { TBookForm, TLocation } from './types'
import { Flex } from 'reflexbox'
import { FormattedMessage } from 'react-intl'
import { TextField } from '@material-ui/core'

import {
  useStyles,
  wrapperStyles,
  textFieldStyles,
  useTitleTFStyles,
  useAuthorTFStyles,
} from './styles'
import TransInputLabel from '../../../components/TransInputLabel'
import { Button } from '../../../components/Button'
import { Text } from '../../../components/Text'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { TBook } from '../types'
import { TBookListReducers } from '../BookList/types'
import { addOrUpdateBook } from '../ducks'
import { connect } from 'react-redux'

const mapStateToProps = ({ BookReducer }: TBookListReducers) => ({
  bookList: BookReducer.bookList,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addOrUpdateBook }, dispatch)

const BookForm: FC<TBookForm> = ({ bookList, addOrUpdateBook }) => {
  const location: TLocation = useLocation()
  const { register, handleSubmit, reset } = useForm()
  const history = useHistory()

  const classes = useStyles()
  const titleTextFieldStyles = useTitleTFStyles()
  const authorTextFieldStyles = useAuthorTFStyles()

  useEffect(() => {
    if (location.state) {
      const { state } = location
      const { book } = state

      reset(book)
    }
  }, [location, reset])

  const onSubmit = (data: TBook) => {
    addOrUpdateBook(bookList, data).then(() => {
      history.push('/books')
    })
  }

  return (
    <Flex flexDirection="column">
      <Flex mt={20} justifyContent="center">
        <Flex width="70%">
          <Text fontFamily="Roboto" fontSize="24px" color="#013243">
            <FormattedMessage id="book.newBook" />
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" mt="50px">
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex css={wrapperStyles}>
            <TextField type="hidden" id="id" name="id" inputRef={register} />
            <TextField
              autoFocus
              id="title"
              name="title"
              css={textFieldStyles}
              variant="outlined"
              inputRef={register}
              className={titleTextFieldStyles.root}
              label={<TransInputLabel id="book.title" />}
            />
            <TextField
              id="author"
              name="author"
              variant="outlined"
              inputRef={register}
              css={textFieldStyles}
              label={<TransInputLabel id="book.author" />}
              className={authorTextFieldStyles.root}
            />
          </Flex>
          <Flex css={wrapperStyles} mt="2%">
            <TextField
              id="publishingCompany"
              name="publishingCompany"
              inputRef={register}
              variant="outlined"
              label={<TransInputLabel id="book.publishingCompany" />}
              className={titleTextFieldStyles.root}
            />
            <TextField
              id="publishDate"
              name="publishDate"
              inputRef={register}
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              label={<TransInputLabel id="book.publishDate" />}
              className={authorTextFieldStyles.root}
            />
          </Flex>
          <Flex width="100%" justifyContent="flex-end">
            <Flex className={classes.submitWrapper}>
              <Button
                onClick={() => {
                  history.push('/books')
                }}
                className={classes.cancel}
              >
                <Text fontFamily="Roboto" fontSize="18px" color="#fff">
                  <FormattedMessage id="cancel" />
                </Text>
              </Button>
              <Button type="submit" className={classes.submit}>
                <Text fontFamily="Roboto" fontSize="18px" color="#fff">
                  <FormattedMessage id="save" />
                </Text>
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}

const enhance = compose<FC>(connect(mapStateToProps, mapDispatchToProps))

export default enhance(BookForm)
