import { useState } from 'react';
import {Navegacao} from './Navegacao.jsx'
import { ItemCardapio } from './ItemCardapio.jsx';
import {pratosPrincipais, sobremesas, bebidas} from './cardapio.js'

//CSS
import './App.css';

//IMAGE
import Hashtaurante from './assets/hashtaurante.webp'


export function App(){

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  let [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return(
    <>
      <img src={Hashtaurante} alt='imagem restaurante' className='capa' />
      <Navegacao setPaginaSelecionada = {setPaginaSelecionada} />
      <div className='menu'>
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
      </div>
      
    </>
  )
}