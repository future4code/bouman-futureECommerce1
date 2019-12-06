import React from 'react';
import styled from 'styled-components';

const FiltroDiv = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 100vh;
    margin: 5px;
    background-color: rgba(233, 48, 66, 0.5);
    color: white;


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
                      
        }

    }


   

    render(){

        return(
            <FiltroDiv>
                <ContainerDiv>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo:</label>
                    <input value={this.props.valueControleMinimo} onChange={this.props.controleMinimo} type="number"></input>
                    <label>Valor Máximo:</label>
                    <input value={this.props.valueControleMaximo} onChange={this.props.controleMaximo} type="number"></input>
                    <label>Buscar Produto</label>
                    <input   value={this.props.valueBuscarProduto} onChange={this.props.controleBusca}></input>
                </ContainerDiv>
            </FiltroDiv> 
        )
    }
}
export default Filtro;