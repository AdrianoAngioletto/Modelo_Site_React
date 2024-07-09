import logo from '../../imagens/logo.png'

 function Logo () {

    return( 

            <div className='logo'>
  
            <img src={logo} alt=' imagem '></img> 
     
            
           </div>
        
        )
       

}

function Lista(){

    return(

     <ul className='lista'>

        <li className='opcao'>
        <p>Categorias</p>
  
     </li>
 
     <li className='opcao'>
        <p>Minha ESTANTE</p>
   
    </li>
  
    <li className='opcao'>

        <p>Carrinho</p>
   
     </li>

     </ul>


    )

}

export {Logo, Lista};