const calcularPrecoCarrinho = ({
  produtosDoCarrinho,
  atualizarItensCarrinho,
}) => {
  if (produtosDoCarrinho.length === 0) {
    return "";
  }

  return (
    <div>
      <div className="divInferiorCarrinhoDeConpras">
        <p>Total</p>
        <p>
          {produtosDoCarrinho
            .reduce((acumulador, item) => acumulador + item.price, 0)
            .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </p>
      </div>
      <button
        onClick={() => {
          atualizarItensCarrinho([]);
        }}
        className="btnRemoverTodos"
      >
        Remover Todos
      </button>
    </div>
  );
};

export default calcularPrecoCarrinho;
