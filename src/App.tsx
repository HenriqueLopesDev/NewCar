import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
