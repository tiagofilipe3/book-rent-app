import { variant } from 'styled-system'

const fontFamily = () => {
  return variant({
    prop: 'fontFamily',
    variants: {
      default: {
        fontFamily: 'Roboto',
      },
      Roboto: {
        fontFamily: 'Roboto',
      },
      Poppins: {
        fontFamily: 'Poppins',
      },
    },
  })
}

export { fontFamily }
