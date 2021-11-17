import Header from './components/Header/Header'
import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/Theme'
import AboutSlider from 'components/AboutSlider/AboutSlider'
import MainMobile from 'components/MainMobile/MainMobile'
import Footer from 'components/Footer/Footer'
import MainDesktop from 'components/MainDesktop/MainDesktop'
import { mainContent } from 'content'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header/>
    <AboutSlider />
    <MainMobile content={mainContent}/>
    <MainDesktop content={mainContent}/>
    <Footer />
    </ThemeProvider>
  )
}

export default App
