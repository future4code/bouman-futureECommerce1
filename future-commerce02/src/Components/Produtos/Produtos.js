import React from 'react';
import styled from 'styled-components';

const ProdutosMainDiv = styled.div`

`
const ProdutosDiv = styled.div`
padding:5px;
border: 1px solid black;
margin: 5px;
`
const ButtonComprar = styled.button`

`
const PessoaContainer = styled.div`  
    /* display: flex; 
    width: 100%; 
    justify-content: flex-start; */`
  
  
const CampoValor = styled.p`  
    font-style: bold;   
  `

const CampoDeNome = styled.p``

const ImagemProduto = styled.img`
  display:block;
  max-width: 200px;
  max-height: 200px;
  
  


`
function Produtos(props) {

  


    return(
      <ProdutosMainDiv>
        <ProdutosDiv>
            <ImagemProduto src={props.imagemProduto}></ImagemProduto>
              <CampoDeNome>{props.nome}</CampoDeNome>   
              <CampoValor><label>R$</label>{props.valor} </CampoValor>
              <ButtonComprar onClick="">Comprar</ButtonComprar>
              
        </ProdutosDiv>
      </ProdutosMainDiv>
    );
  }

  export default Produtos