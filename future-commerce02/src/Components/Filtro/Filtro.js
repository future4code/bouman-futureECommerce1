import React from 'react';
import styled from 'styled-components';

const FiltroDiv = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 100vh;
    margin: 5px;
`
const ContainerDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin: 4px;
`


class Filtro extends React.Component{
    constructor(props){
    super(props);
    this.state = {
            inputValorMinimo: '',
            inputValorMaximo:'',
            inputBuscarProduto: '',
            produtosLoja: props.valorProduto,
            
        }


    }




    render(){
        return(
            <FiltroDiv>
                <ContainerDiv>
                    <h2>Filtros:</h2>
                    <label>Valor Mínimo:</label>
                    <input value={this.state.inputValorMinimo} onChange="" type="number"></input>
                    <label>Valor Máximo:</label>
                    <input value={this.state.inputValorMaximo} onChange="" type="number"></input>
                    <label>Buscar Produto</label>
                    <input   value={this.state.inputBuscarProduto}></input>
                </ContainerDiv>
            </FiltroDiv>
            
        )
    }
}
export default Filtro;