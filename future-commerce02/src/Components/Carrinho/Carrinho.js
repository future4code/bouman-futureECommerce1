import React from 'react';
import styled from 'styled-components';

const CarrinhoDiv = styled.div`
height:100vh;
border: 1px solid;
width: 160px;
margin: 5px;

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
                <h2>Carrinho</h2>
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