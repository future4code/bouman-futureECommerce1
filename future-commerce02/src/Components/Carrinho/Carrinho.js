import React from 'react';
import styled from 'styled-components';

const CarrinhoDiv = styled.div`
height:100vh;
border: 1px solid black;
width: 160px;
margin: 5px;
background-color: rgba(233, 48, 66, 0.5);
color:white;
padding-left: 4px;


`
const TitleDiv = styled.div`
text-align: center;

`
const DivDoArryCarrinho = styled.div`



`
const DivDoTotal = styled.div`

`

class Carrinho extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    




    render(){
        return(
            <CarrinhoDiv>
                <TitleDiv>
                    <h2>Carrinho</h2>
                </TitleDiv>
                <DivDoArryCarrinho>

                </DivDoArryCarrinho>
                <DivDoTotal>
                    <label>R$</label> 
                </DivDoTotal>
            </CarrinhoDiv>
        )
    }


}
export default Carrinho;