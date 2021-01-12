import React from 'react'

import BookList from '.'
import { TBook } from '../types'
import { render } from '../../../utils/test-utils'

const bookListMock: TBook[] = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    publishingCompany: 'ABC',
    rented: true,
    publishDate: '2020-01-12',
  },
]

describe('Book List', () => {
  it('renders', () => {
    const { getByText } = render(<BookList />, {
      initialState: { BookReducer: { bookList: bookListMock } },
    })

    getByText('Book 1')
  })
})
