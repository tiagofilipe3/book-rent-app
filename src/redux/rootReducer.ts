import { combineReducers } from 'redux'

import LoginReducer from '../features/Login/ducks'
import BookReducer from '../features/Book/ducks'

const rootReducer = combineReducers({
  LoginReducer,
  BookReducer,
})

export default rootReducer
