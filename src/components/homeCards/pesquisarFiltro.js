function pesquisaFiltro(event, arr, atualizarCards, pesquisa){
    event.preventDefault()

    const filter = arr.filter((iten)=>{
      return true === iten.category.toLowerCase().split(" ").join("").includes(pesquisa.toLowerCase().split(" ").join(""))
      })

      atualizarCards(filter)
  }
  
  export default pesquisaFiltro