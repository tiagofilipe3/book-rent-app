import {
  lineHeight,
  fontSize,
  fontStyle,
  color,
  fontWeight,
  letterSpacing,
  textAlign,
  maxWidth,
} from 'styled-system'
import { textStyle, colorStyle } from '@styled-system/variant'
import { space } from '@styled-system/space'
import styled from '@emotion/styled'

import { fontFamily } from '../../variants/fontFamily'

export const StyledText = styled.span`
  ${fontFamily}
  ${space}
  ${lineHeight};
  ${fontSize};
  ${fontStyle};
  ${color};
  ${colorStyle}
  ${textStyle}
  ${fontWeight};
  ${letterSpacing};
  ${textAlign}
  ${maxWidth}
`
