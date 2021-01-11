import { TLoginReducer } from '../features/Login/types'
import React from 'react'

export type TPrivateRoute = {
  userIsLogged?: boolean
  path: string
  key: string
  children: React.ReactNode
}

export type TPrivateRouteReducers = {
  LoginReducer: TLoginReducer
}
