import React from 'react'
import { Global, css } from '@emotion/react'

import Roboto from '../assets/fonts/Roboto-Regular.ttf'
import Poppins from '../assets/fonts/Poppins-Regular.ttf'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          line-height: initial;
        }

        #root {
          height: 100%;
        }

        body {
          margin: 0px;
        }

        @font-face {
          font-family: 'Roboto';
          src: local('Roboto'), local('Roboto'),
            url(${Roboto}) format('truetype');
        }

        @font-face {
          font-family: 'Poppins';
          src: local('Poppins'), local('Poppins'),
            url(${Poppins}) format('truetype');
        }

        .rtf--ab__c > span {
          font-family: 'Roboto';
          font-size: 15px;
        }
      `}
    />
  )
}

export default GlobalStyles
