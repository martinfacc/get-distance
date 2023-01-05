import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '@fontsource/dm-sans'
import '@fontsource/fira-code'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "DM Sans";
    font-weight: 600;
    color: #333;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`

export default GlobalStyles as unknown as React.FC
