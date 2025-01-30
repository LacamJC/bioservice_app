import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Sobre from './components/pages/Sobre'
import Servicos from './components/pages/Servicos'
import Footer from './components/layout/Footer'
import MenuSuspenso from './components/layout/MenuSuspenso'
import Formulario from './components/pages/Formulario'
import Contato from './components/pages/Contato'
import Whatsapp from './components/objects/Whatsapp'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <>
      <Header/>
        <MenuSuspenso/>
          <Hero/>
            <Sobre/>
              <Servicos/>
                <Formulario/>
                  <Contato/>
                  
      <Footer/>

      <Whatsapp/>
    </>
  )
}

export default App;
