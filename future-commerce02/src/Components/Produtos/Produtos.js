import React from 'react';
import styled from 'styled-components';

const ProdutosMainDiv = styled.div`

`
const ProdutosDiv = styled.div`
padding:5px;
border: 1px solid black;
margin: 5px;
background-color: rgba(29, 23, 23, 0.7);
color: white;
`
const ButtonComprar = styled.button`
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-weight:bold;
	padding:6px 15px;

:hover {
	background: #ffffff;
	background-color: #666666;
  color: #ffffff;
  border: 1px solid black;
}


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
              <ButtonComprar onClick={props.colocarCarrinho}>Comprar</ButtonComprar>
              
        </ProdutosDiv>
      </ProdutosMainDiv>
    );
  }

  export default Produtos