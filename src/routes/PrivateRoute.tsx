import React, { FC } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import { TPrivateRoute, TPrivateRouteReducers } from './types'

const mapStateToProps = ({ LoginReducer }: TPrivateRouteReducers) => ({
  userIsLogged: LoginReducer.userIsLogged,
})

const PrivateRoute: FC<TPrivateRoute> = ({
  children,
  userIsLogged,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userIsLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const enhance = compose(connect(mapStateToProps, null))

export default enhance(PrivateRoute)
