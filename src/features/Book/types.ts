export type TBook = {
  id: string | number
  title: string
  author: string
  publishingCompany: string
  rented: boolean
  publishDate: Date | string
  selected?: boolean
}

export type TBookReducer = {
  bookList: TBook[]
}

export type TCustomFab = {
  rows: TBook[] | undefined
  checked: TBook[] | undefined
  handleRentConfirmation: () => void
  handleDeleteConfirmation: () => void
}

export type TRentAction = {
  type: string
  payload?: TPayload
}

export type TPayload = {
  newBookList?: TBook[]
}

export type TRentBook = {
  originalRows: TBook[]
  bookIdToRent: string | number
}
