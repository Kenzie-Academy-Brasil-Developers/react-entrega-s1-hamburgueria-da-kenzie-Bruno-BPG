function deletarItenCarrinho(index, atualizarItensCarrinho, produtosCarrinho) {
  // console.log(index)
  const filter = produtosCarrinho.filter((iten) => {
    return iten.id !== index.id;
  });

  atualizarItensCarrinho(filter);
}
export default deletarItenCarrinho;
