import './css.css';

import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProdutos(response))
      .catch((err) => console.log(err));
  }, []);

  const [produtosCarrinho, setProdutosCarrinho] = useState([
      {
        "id": 1,
        "quantidade":1,
        "name": "Hamburguer",
        "category": "Sanduíches",
        "price": 14,
        "img": "https://i.imgur.com/Vng6VzV.png"
      }
  ]);
  
  // console.log(students)

function gerarCards(){
  return produtos.map((index) => {
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
      <p>{index.price}</p>
      </div>

      <button onClick={()=>{addCarrinho(index)}} className='btnPadrao'>Adicionar</button>            

      </div>

    </div>
    )
  })
}

function addCarrinho(index){
console.log(index)

const filter = produtosCarrinho.filter((iten)=>{
  return iten.id === index.id
  })
if(filter.length >= 1){
  console.log(filter.length)

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


  return (

    <div className="App">
      <header className="App-header">
        <div>
          <p className='logo'>Burguer <span className='vermelho'>Kenzie</span></p>
        </div>
        <div>
        <input></input>
        <button className='btnPesquisa'>Pesquisar</button>
        </div>
      </header>
<main>


    <section className='conteinerGeral'>
       {gerarCards()}
    </section>

    <div className='carrinhoDeConpras'>
      <div>fsdf</div>
    {gerarCardsCarrinho()}
    </div>

</main>

    </div>
  );
}

export default App;
