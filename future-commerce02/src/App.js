import React from 'react';
import styled from 'styled-components';
import Filtro from './Components/Filtro/Filtro';
import Carrinho from './Components/Carrinho/Carrinho';
 import Produtos from './Components/Produtos/Produtos';
import proptypes from 'prop-types';
import wallpaper02 from './Components/imgBrinquedos/wallpaper02.jpg'
import { isReturnStatement } from '@babel/types';

const MainDiv = styled.div`
display: flex;
max-width: 100%;
background-image: url(${wallpaper02});

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
  },]



class App extends React.Component{
        constructor(props){
          super(props);
          this.state = {
            inputValorMinimo: 0,
            inputValorMaximo: Infinity,
            carrinhoCompras: props.valorProduto,
            carrinhoCompras: [],
            buscarCompras: '',


          }
      
      }


      controleMinimo = (event) => {
        this.setState({
            inputValorMinimo: event.target.value,
        })
    }

    controleMaximo = (event) => {
        this.setState({
            inputValorMaximo: event.target.value,
        })
    }

    controleBusca = (event) => {
        this.setState({
            buscarCompras: event.target.value,
        })
    }



      atualizarFiltro = () => {
        this.setState({
          
        })
      }

   
      

      colocarCarrinho = (produtos) => {
        const itensComprados = [...this.state.carrinhoCompras]
        const produtosIndex = this.state.carrinhoCompras.findIndex((item) => item.produtos.id === produtos.id)
    
        if (produtosIndex > -1) {
            itensComprados[produtosIndex].quantity += 1
        } else {
            itensComprados.push({ produto: produtos, quantity: 1 })
        }
    
        this.setState({
          arrayProdutos: itensComprados,
          
        })
        
        console.log(itensComprados)
        
      }


    render(){

    //   filtrar = () => {
    //     const listaFiltrada = props.lista.filter((valor) => {
    //        if (valor.valorProduto >= this.state.inputValorMinimo && valor.valorProduto <= this.state.inputValorMaximo){
    //             return true
    //     }
    //        else{
    //            return false
    //     }
    // })}

    let funcaoMinimo = ProdutosLoja.filter((produtos => {
      if(produtos.valorProduto > this.state.inputValorMinimo){
        return produtos.valorProduto;
        
      }
  

    }))

     let filtroBuscar = ProdutosLoja.filter((produtos) => {
        return produtos.nomeProduto.toLowerCase().includes(this.state.buscarCompras.toLowerCase())

     })
      
     console.log(this.state.buscarCompras)

      return(
        
      
      <MainDiv>
          <Filtro carrinhoCompras={ProdutosLoja} controleMinimo={this.controleMinimo} controleMaximo={this.controleMaximo} controleBusca={this.controleBusca} valueControleMinimo={this.state.inputValorMinimo} valueControleMaximo={this.state.inputValorMaximo} valueBuscarProdutos={this.state.inputBuscarProduto} filtroBuscar={filtroBuscar} funcaoMinimo={funcaoMinimo}/>
        <ProdutosDiv>
          {filtroBuscar.map(produto => {
            return <Produtos nome={produto.nomeProduto} valor={produto.valorProduto} imagemProduto={produto.imagemProduto} 
            />
          })}
        </ProdutosDiv>
        <Carrinho>
          
        </Carrinho>
        
      </MainDiv>
      
    )};
  
  }


export default App;
