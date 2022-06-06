import './css.css';

import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filtrar, setFiltrar] = useState([]);


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => 
      {setProdutos(response)
        setFiltrar(response)
      })
      .catch((err) => console.log(err));
  }, []);

  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  

function pesquisaFiltro(event){
  console.log(event.value)
}


function gerarCards(arr){

  return arr.map((index) => {
    return (
      <div className="conteiner" key={index.id}>

        <div className="card">
          <div className='ggg'>
            <div className='divImg'>
              <img src={index.img} alt={index.name}></img>
            </div>
          </div>

          <div className='informacoes'>
            <h4>{index.name}</h4>
            <p className='categoria'>{index.category}</p>
            <p>{index.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
          </div>

          <button onClick={()=>{addCarrinho(index)}} className='btnPadrao'>Adicionar</button>            

        </div>

      </div>
    )
  })
  
}

function addCarrinho(index){
// console.log(index)

const filter = produtosCarrinho.filter((iten)=>{
  return iten.id === index.id
  })
if(filter.length >= 1){
  console.log(filter.length)
  toast.error("vc ja tem um desses no carrinho")
  return 0
}

setProdutosCarrinho([...produtosCarrinho, { id: index.id, category: index.category, img: index.img, valor: index.name, price: index.price,}])

}

function deletarItenCarrinho(index){
  console.log(index)
  const filter = produtosCarrinho.filter((iten)=>{
    return iten.id !== index.id
    })

    setProdutosCarrinho(filter)

}

function gerarCardsCarrinho(){

  if(produtosCarrinho.length === 0){
    return <div className='carrinhoVazio'>
    <h3 className='carrinhoVazioTitulo'>Sua sacola está vazia</h3>
    <p className='carrinhoVazioSubTitulo'>Adicione itens</p>
    </div>



  }

  return produtosCarrinho.map((index) => {
    return (
      <div className="conteinerCarrinho" key={index.id}>

        <div className='lateralEsquerdaCarrinhoCard'>

        <div className='imgCarrinho'>
        <img src={index.img} alt={index.name}></img>
        </div>

      <div>
        <h4 className='tituloCarrinho'>{index.name}</h4>
        <p className='categoriaCarrinho'>{index.category}</p>
      </div>

        </div>

      <p className='btnRemove' onClick={()=>{deletarItenCarrinho(index)}} >remover</p> 

    </div>
    )
  })
}

function calcularReduce(){
  if(produtosCarrinho.length === 0){
    return ""

  }
  return produtosCarrinho.reduce((acumulador, item) => acumulador + item.price , 0).toLocaleString("pt-br",{style:"currency",currency:"BRL"})
}

  return (

    <div className="App">
      <header className="App-header">
        <div>
          <p className='logo'>Burguer <span className='vermelho'>Kenzie</span></p>
        </div>
        <div>
        <input id='barraDePesquisa'></input>
        <button onClick={()=>{pesquisaFiltro()}} className='btnPesquisa'>Pesquisar</button>
        </div>
      </header>
<main>


    <section className='conteinerGeral'>
       {gerarCards(produtos)}
    </section>

    <div className='carrinhoDeConpras'>
      <div>fsdf</div>
    {gerarCardsCarrinho()}

    <div className='mostrarPrecoSub'>
      <p>{calcularReduce()}</p>
    </div>
    </div>

</main>

    </div>
  );
}

export default App;
