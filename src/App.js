import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Sobre from './components/pages/Sobre'
import Servicos from './components/pages/Servicos'
import Contato from './components/pages/Contato'
import Footer from './components/layout/Footer'
import MenuSuspenso from './components/layout/MenuSuspenso'
import Carrosel from './components/objects/Carrosel'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <>
      <Header/>
      <MenuSuspenso/>
      <Hero/>
      <Sobre/>
      <Servicos/>
      <Contato/>
      <Footer/>
      {/* <Carrosel/> */}
    </>
  )
}

export default App;
