import { addCarrinho } from "../addCarrinho";
import "./css.css";

const gerarCards = ({ itens, salvarCarrinho, produtosCarrinho }) => {
  return itens.map((produto) => (
    <div className="conteiner" key={produto.id}>
      <div className="card">
        <div className="divInternaCard">
          <div className="divImg">
            <img src={produto.img} alt={produto.name}></img>
          </div>
        </div>

        <div className="informacoes">
          <h4>{produto.name}</h4>
          <p className="categoria">{produto.category}</p>
          <p>
            {produto.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <button
          onClick={() => {
            addCarrinho(produto, salvarCarrinho, produtosCarrinho);
          }}
          className="btnPadrao"
        >
          Adicionar
        </button>
      </div>
    </div>
  ));
};

export default gerarCards;
