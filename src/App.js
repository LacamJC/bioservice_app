import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Sobre from './components/pages/Sobre'
import Servicos from './components/pages/Servicos'
import Contato from './components/pages/Contato'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <Sobre/>
      <Servicos/>
      <Contato/>
    </>
  )
}

export default App;
