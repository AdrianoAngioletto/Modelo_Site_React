import './componentes/logo/estilo.css'
import './App.css'
import {Logo} from './componentes/logo/'
import livro from './imagens/livro.png'
import icone from './imagens/perfil.svg'
import icone2 from './imagens/sacola.svg'
import { Icones, OpcaoHeader } from './OpcaoHeader'

const imagens = [icone, icone2]

function App() {
  return (

    <div className='App'>
    <header className='App-header'>
      <Logo />

      <OpcaoHeader />

      <Icones/>


    </header>
     </div>

  ); 
}

export default App;
