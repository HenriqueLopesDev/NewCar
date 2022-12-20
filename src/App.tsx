import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CarsContextProvider } from './contexts/CarsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <CarsContextProvider>
          <Router />
        </CarsContextProvider>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
