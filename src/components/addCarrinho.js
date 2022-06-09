// import {useState } from "react";
import { toast } from "react-toastify";

export const addCarrinho = (index, salvarCarrinho, produtosCarrinho) => {
  const filter = produtosCarrinho.filter((iten) => {
    return iten.id === index.id;
  });
  if (filter.length >= 1) {
    console.log(filter.length);
    toast.error("vc ja tem um desses no carrinho");
    return 0;
  }

  salvarCarrinho([
    ...produtosCarrinho,
    {
      id: index.id,
      category: index.category,
      img: index.img,
      nome: index.name,
      price: index.price,
    },
  ]);
};
