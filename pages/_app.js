import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  
  body {
    margin: 0;
    padding: 0;
    background: #212121;
    font-family: sans-serif;
  }

  #_next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

const theme = {
  colors: {
    primary: '#154c79',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
