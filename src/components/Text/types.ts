import React from 'react'
import {
  ColorStyleProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  MaxWidthProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system'

export type TText = SpaceProps &
  FontFamilyProps &
  LineHeightProps &
  FontSizeProps &
  FontStyleProps &
  ColorStyleProps &
  TextStyleProps &
  FontWeightProps &
  LetterSpacingProps &
  TextAlignProps &
  MaxWidthProps & {
    children: React.ReactNode
    color?: string | undefined
  }
