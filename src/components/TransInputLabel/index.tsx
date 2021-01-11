import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { Text } from '../Text'
import { TTransInputLabel } from './types'

const TransInputLabel: FC<TTransInputLabel> = ({ id, ...rest }) => (
  <Text {...rest}>
    <FormattedMessage id={id} />
  </Text>
)

export default TransInputLabel
