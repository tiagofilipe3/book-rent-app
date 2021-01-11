export type TLoginReducer = {
  userIsLogged: boolean
  user: Record<string, unknown> | undefined
}

export type TLoginAction = {
  type: string
  payload?: TPayload
}

type TPayload = {
  user: Record<string, unknown>
}

export type TLoginReducers = {
  LoginReducer: TLoginReducer
}

export type TLoginPage = {
  classes: Record<string, string>
  doLogin: () => Promise<any>
}
