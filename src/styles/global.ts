import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Robot', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
