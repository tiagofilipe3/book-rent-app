import styled from '@emotion/styled'
import { Flex } from 'reflexbox'

const Tag = styled(Flex)`
  margin-top: 10px;
  justify-content: center;
  margin-right: 10px;
  padding: 5px 15px;
  background-color: ${({ color }) => color && color};
  color: #fff;
  border-radius: 20px;
  font-family: 'Roboto';
  font-size: 1.1em;
`

export { Tag }
