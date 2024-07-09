import '../App.css';
import icone from '../imagens/perfil.svg'
import icone2 from '../imagens/sacola.svg'

const imagens = [icone, icone2]
const texto = ['CATEGORIAS', 'TEST', 'TEST2']

function OpcaoHeader(){
    return(
    <ul className='lista'>
    {texto.map( (texto) => (

      <li className='opcao'> <p>{texto}</p> 
      </li>

    ))}
  
  </ul>
)

}

function Icones(){
    return(
    <ul className='icones'>

    {imagens.map( (imagen)=> (

      <li> <img className='icons' src={imagen}></img> </li>

    ))


    }

  </ul>
    )
}

export {OpcaoHeader, Icones};