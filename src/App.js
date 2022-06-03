import './css.css';

import { useEffect, useState } from "react";


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  // console.log(students)



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

        {students.map((index) => (
  
          <div className="conteiner" key={index.id}>

            <div className="card">
            <div className='ggg'>
            <div className='divImg'>
            <img src={index.img} alt="Girl in a jacket"></img>
            </div>
            </div>


            <div className='informacoes'>
            <h4>{index.name}</h4>
            <p className='categoria'>{index.category}</p>
            <p>{index.price}</p>
            </div>

            <button className='btnPadrao'>Adicionar</button>            


            </div>

          </div>
        ))
        }


    </section>

    <div className='carrinhoDeConpras'>

    </div>

</main>

    </div>
  );
}

export default App;
