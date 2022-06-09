import deletarItenCarrinho from "../deletarItenCarrinho";
import "./css.css";

const gerarCardsCarrinho = ({ produtosCarrinho, atualizarItensCarrinho }) => {
  if (produtosCarrinho.length === 0) {
    return (
      <div className="carrinhoVazio">
        <h3 className="carrinhoVazioTitulo">Sua sacola está vazia</h3>
        <p className="carrinhoVazioSubTitulo">Adicione itens</p>
      </div>
    );
  }

  return produtosCarrinho.map((index) => {
    return (
      <div className="conteinerCarrinho" key={index.id}>
        <div className="lateralEsquerdaCarrinhoCard">
          <div className="imgCarrinho">
            <img src={index.img} alt={index.name}></img>
          </div>

          <div>
            <h4 className="tituloCarrinho">{index.nome}</h4>
            <p className="categoriaCarrinho">{index.category}</p>
          </div>
        </div>

        <p
          className="btnRemove"
          onClick={() => {
            deletarItenCarrinho(
              index,
              atualizarItensCarrinho,
              produtosCarrinho
            );
          }}
        >
          remover
        </p>
      </div>
    );
  });
};

export default gerarCardsCarrinho;
