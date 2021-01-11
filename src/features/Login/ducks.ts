import { TLoginAction, TLoginReducer } from './types'
import { Dispatch } from 'redux'

const DO_LOGIN = 'DO_LOGIN'
const DO_LOGOUT = 'DO_LOGOUT'

const initialState: TLoginReducer = {
  userIsLogged: true,
  user: undefined,
}

const reducer = (state = initialState, action: TLoginAction) => {
  const { payload, type } = action

  switch (type) {
    case DO_LOGIN:
      return {
        ...state,
        userIsLogged: true,
        user: payload ? payload.user : undefined,
      }
    case DO_LOGOUT:
      return {
        ...state,
        userIsLogged: false,
        user: undefined,
      }
    default:
      return state
  }
}

export const doLogin = () => {
  return async (dispatch: Dispatch<TLoginAction>) => {
    dispatch({
      type: 'DO_LOGIN',
      payload: {
        user: {},
      },
    })
  }
}

export const doLogout = () => {
  return async (dispatch: Dispatch<TLoginAction>) => {
    dispatch({
      type: DO_LOGOUT,
    })
  }
}

export default reducer
