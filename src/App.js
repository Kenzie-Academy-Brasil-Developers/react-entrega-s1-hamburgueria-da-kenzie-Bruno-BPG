import "./css.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import GerarCards from "./components/homeCards/gerrarCards";
import GerarCardsCarrinho from "./components/carrinhoCards/gerrarCardsCarrinho";
import CalcularPrecoCarrinho from "./components/carrinhoCards/calcularPrecoCarrinho";
import pesquisaFiltro from "./components/homeCards/pesquisarFiltro";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filtrar, setFiltrar] = useState([]);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  //salva o que foi digitado
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProdutos(response);
        setFiltrar(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="logo">
            Burguer <span className="vermelho">Kenzie</span>
          </p>
        </div>
        <div>
          <form
            onSubmit={(event) =>
              pesquisaFiltro(event, filtrar, setProdutos, pesquisa)
            }
          >
            <input
              id="barraDePesquisa"
              onChange={(event) => setPesquisa(event.target.value)}
            ></input>
            <button id="btnDePesquisa" type="submit" className="btnPesquisa">
              Pesquisar
            </button>
          </form>
        </div>
      </header>

      <main>
        <section className="conteinerGeral">
          <GerarCards
            itens={produtos}
            salvarCarrinho={setProdutosCarrinho}
            produtosCarrinho={produtosCarrinho}
          >
            {" "}
          </GerarCards>
        </section>

        <div className="carrinhoDeConpras">
          <div className="parteSuperiorCarrinhoDeConpras">
            <p className="textoDaParteSuperiorCarrinhoDeConpras">
              Carrinho de compras
            </p>
          </div>
          <GerarCardsCarrinho
            atualizarItensCarrinho={setProdutosCarrinho}
            produtosCarrinho={produtosCarrinho}
          ></GerarCardsCarrinho>

          <div className="mostrarPrecoSub">
            <CalcularPrecoCarrinho
              atualizarItensCarrinho={setProdutosCarrinho}
              produtosDoCarrinho={produtosCarrinho}
            ></CalcularPrecoCarrinho>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
