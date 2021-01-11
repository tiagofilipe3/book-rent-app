import React from 'react'

import BookList from '../features/Book/BookList'
import BookForm from '../features/Book/BookForm'

const privateRoutes = [
  {
    path: '/books',
    component: <BookList />,
  },
  {
    path: '/bookForm',
    component: <BookForm />,
  },
]

export { privateRoutes }
