import React from 'react';
import styled from 'styled-components';
import Filtro from './Components/Filtro/Filtro';
import Carrinho from './Components/Carrinho/Carrinho';
import Produtos from './Components/Produtos/Produtos';
import proptypes from 'prop-types';
import { isReturnStatement } from '@babel/types';

const MainDiv = styled.div`
display: flex;
max-width: 100%;

`
const ProdutosDiv = styled.div`
display: flex;
max-width: 900px;
flex-wrap: wrap;
margin-left:5px;

`

const ProdutosLoja = [

  {
    id: 1,
    nomeProduto: 'Play Machine Foguete',
    valorProduto: 100,
    imagemProduto: require('./Components/imgBrinquedos/01.jpeg'),
  },
  {
    id: 2,
    nomeProduto: 'Space com Led',
    valorProduto: 120,
    imagemProduto: require('./Components/imgBrinquedos/02.jpeg'),
  },
  {
    id: 3,
    nomeProduto: 'Patrulheiro Stitch',
    valorProduto: 200,
    imagemProduto: require('./Components/imgBrinquedos/03.jpeg'),
  },
  {
    id: 4,
    nomeProduto: 'Astronaut Lego',
    valorProduto:180,
    imagemProduto: require('./Components/imgBrinquedos/04.jpg'),
  },
  {
    id: 5,
    nomeProduto: 'Space Bronze',
    valorProduto: 20,
    imagemProduto: require('./Components/imgBrinquedos/05.jpg') ,
  },
  {
    id: 6,
    nomeProduto: 'Yellow Space Lego',
    valorProduto: 150,
    imagemProduto: require('./Components/imgBrinquedos/06.jpg'),
  },
  {
    id: 7,
    nomeProduto: 'Space Surveyor x12',
    valorProduto: 300,
    imagemProduto: require('./Components/imgBrinquedos/07.jpg'),
  },
  {
    id: 8,
    nomeProduto: 'Rick e Morty',
    valorProduto: 280,
    imagemProduto: require('./Components/imgBrinquedos/08.jpg'),
  },

]

function App(props) {

  return(
    <MainDiv>
      <Filtro produtosLoja={props.ProdutosLoja}/>
      <ProdutosDiv>
      {ProdutosLoja.map(produto => {
        return <Produtos nome={produto.nomeProduto} valor={produto.valorProduto} imagemProduto={produto.imagemProduto} 
        />
      })}
      </ProdutosDiv>
      <Carrinho>

      </Carrinho>
    



    </MainDiv>
  );
}

export default App;
