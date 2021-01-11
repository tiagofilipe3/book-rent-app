import { Flex } from 'reflexbox'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import React, { FC, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { bindActionCreators, compose, Dispatch } from 'redux'

import { doLogin } from './ducks'
import { inputStyles } from './styles'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { TLoginPage, TLoginReducers } from './types'

const mapStateToProps = ({ LoginReducer }: TLoginReducers) => ({
  userIsLogged: LoginReducer.userIsLogged,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ doLogin }, dispatch)

const LoginPage: FC<TLoginPage> = (props) => {
  const { classes, doLogin } = props
  const { register, handleSubmit, errors } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const intl = useIntl()

  const onSubmit = async () => {
    setIsLoading(true)
    await doLogin().then(() => {
      setIsLoading(false)
      history.push('/books')
    })
  }

  return (
    <Flex
      height="100%"
      alignItems="center"
      justifyContent="flex-start"
      backgroundColor="#013243"
      flexDirection="column"
    >
      <Flex flexDirection="column" alignItems="center">
        <Text fontFamily="Roboto" fontSize="80px" mt="80px" color="#fff">
          <FormattedMessage id="bookRent" />
        </Text>
        <Text fontFamily="Roboto" fontSize="16px" color="#fff" mt={20}>
          <FormattedMessage id="loginToUseOurApp" />
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex mt="40px" flexDirection="column">
            <TextField
              name="email"
              className={classes.root}
              label={intl.formatMessage({ id: 'email' })}
              InputProps={{
                className: classes.input,
                disableUnderline: true,
              }}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <Text fontFamily="Roboto" fontSize="14px" color="#fff" mt="10px">
                <FormattedMessage id="requiredField" />
              </Text>
            )}
          </Flex>
          <Flex mt="30px" flexDirection="column">
            <TextField
              label={intl.formatMessage({ id: 'password' })}
              name="password"
              className={classes.root}
              InputProps={{
                className: classes.input,
                disableUnderline: true,
              }}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              inputRef={register({ required: true })}
              type="password"
            />
            {errors.password && (
              <Text fontFamily="Roboto" fontSize="14px" color="#fff" mt="10px">
                <FormattedMessage id="requiredField" />
              </Text>
            )}
          </Flex>
          <Flex mt="30px" width="100%">
            <Button type="submit" disabled={isLoading}>
              <Text fontFamily="Roboto" fontSize="18px" color="#fff">
                <FormattedMessage id="login" />
              </Text>
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}

const enhance = compose<FC>(
  withStyles(inputStyles),
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(LoginPage)
