import Header from './components/Header/Header'
import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/Theme'
import AboutSlider from 'components/AboutSlider/AboutSlider'
import Main from 'sections/Main'
import Footer from 'components/Footer/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header/>
    <AboutSlider />
    <Main />
    <Footer />
    </ThemeProvider>
  )
}

export default App
