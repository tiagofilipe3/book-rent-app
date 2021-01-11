import { TBook, TBookReducer, TRentAction } from './types'
import { Dispatch } from 'redux'
import { randomID } from '../../utils'

const bookListMock: TBook[] = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    publishingCompany: 'ABC',
    rented: true,
    publishDate: '2020-01-12',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    publishingCompany: 'ABC',
    rented: true,
    publishDate: '2020-01-13',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    publishingCompany: 'ABC',
    rented: false,
    publishDate: '2020-01-14',
  },
  {
    id: 4,
    title: 'Book 4',
    author: 'Author 4',
    publishingCompany: 'ABC',
    rented: false,
    publishDate: '2020-01-15',
  },
  {
    id: 5,
    title: 'Book 5',
    author: 'Author 5',
    publishingCompany: 'ABC',
    rented: false,
    publishDate: '2020-01-16',
  },
  {
    id: 6,
    title: 'Book 6',
    author: 'Author 6',
    publishingCompany: 'ABC',
    rented: false,
    publishDate: '2020-01-17',
  },
]

const RENT = 'RENT'
const DELETE = 'DELETE'
const ADD = 'ADD'

const initialState: TBookReducer = {
  bookList: bookListMock,
}

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case RENT:
    case DELETE:
    case ADD:
      return {
        ...state,
        bookList: payload.newBookList ? payload.newBookList : undefined,
      }
    default:
      return state
  }
}

export const rentBook = (originalRows: TBook[], booksToRent: TBook[]) => {
  return async (dispatch: Dispatch<TRentAction>) => {
    const newBookList: TBook[] = [...originalRows]
    booksToRent.map((b) => {
      const bookToRent = newBookList.find((book) => book.id === b.id)

      if (bookToRent) {
        bookToRent.rented = true
      }
    })

    dispatch({
      type: DELETE,
      payload: {
        newBookList,
      },
    })
  }
}

export const deleteBook = (
  originalRows: TBook[],
  bookIdToRent: string | number
) => {
  return async (dispatch: Dispatch<TRentAction>) => {
    const newBookList: TBook[] = originalRows.filter(
      (book) => book.id !== bookIdToRent
    )

    dispatch({
      type: DELETE,
      payload: {
        newBookList,
      },
    })
  }
}

export const addOrUpdateBook = (originalRows: TBook[], book: TBook) => {
  return async (dispatch: Dispatch<TRentAction>) => {
    let newBookList: TBook[] | undefined = undefined
    const bookListCopy = [...originalRows]

    if (book.id) {
      let bookToEdit: TBook | undefined = bookListCopy.find(
        (b) => b.id === Number(book.id)
      )

      if (bookToEdit) {
        bookToEdit.id = Number(book.id)
        bookToEdit.title = book.title
        bookToEdit.author = book.author
        bookToEdit.publishDate = book.publishDate
        bookToEdit.publishingCompany = book.publishingCompany
        bookToEdit.selected = false

        newBookList = bookListCopy
      }
    } else {
      book.id = randomID()
      newBookList = [...bookListCopy, book]
    }

    dispatch({
      type: ADD,
      payload: {
        newBookList,
      },
    })
  }
}

export default reducer
