import { TBook, TBookReducer } from '../types'

export type TBookListReducers = {
  BookReducer: TBookReducer
}

export type TBookList = TBookReducer & {
  rentBook: (originalRows: TBook[], bookIdToRent: TBook[]) => Promise<any>
  deleteBook: (
    originalRows: TBook[],
    bookIdToRent: string | number
  ) => Promise<any>
}
