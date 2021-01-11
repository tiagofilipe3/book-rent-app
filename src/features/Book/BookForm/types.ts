import { LocationState } from 'history'
import { TBook, TBookReducer } from '../types'

type TBookLocationState = {
  book: TBook
}

export type TLocation = {
  state?: LocationState & TBookLocationState
}

export type TBookForm = TBookReducer & {
  addOrUpdateBook: (originalRows: TBook[], book: TBook) => Promise<any>
}
