function pesquisaFiltro(event, arr, atualizarCards, pesquisa) {
  event.preventDefault();

  const filterCategoria = arr.filter((iten) => {
    return (
      true ===
      iten.category
        .toLowerCase()
        .split(" ")
        .join("")
        .includes(pesquisa.toLowerCase().split(" ").join(""))
    );
  });

  if (filterCategoria.length === 0) {
    const filterNome = arr.filter((iten) => {
      return (
        true ===
        iten.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(pesquisa.toLowerCase().split(" ").join(""))
      );
    });

    atualizarCards(filterNome);
    return 0;
  }

  atualizarCards(filterCategoria);
}

export default pesquisaFiltro;
