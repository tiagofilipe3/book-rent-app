import { FC } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { withStyles } from '@material-ui/core'
import { bindActionCreators, compose, Dispatch } from 'redux'

import { inputStyles } from '../Login/styles'
import { doLogout } from '../Login/ducks'
import { TLogout } from './types'

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ doLogout }, dispatch)

const Logout = ({ doLogout }: TLogout) => {
  const history = useHistory()
  console.log('a')

  doLogout().then(() => {
    history.push('/')
  })

  return null
}

const enhance = compose<FC>(
  withStyles(inputStyles),
  connect(null, mapDispatchToProps)
)

export default enhance(Logout)
