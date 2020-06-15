---
path: "/blog/minha-pagina"
title: "Minha página - com foto"
description: "Bem vindo à minha página"
category: "Política"
price: "$150,00"
banner: './img-001.jpg'
---

# Minha página

Este é um parágrafo

## Subtítulo

Este é outro parágrafo.

![Minha foto](./img-001.jpg)

![Minha foto](../img-002.jpg)

O que é o Gatsby?
Se você conhece o React, já sabe que apesar de ter ele trazer diversas vantagens para o FrontEnd, ele possui diversos problemas com SEO devido a renderização dos componentes no JavaScript.

Para contornar essa situação, surgiram alguns frameworks como o Next.js e o Gatsby. O Next.js utiliza um processo de SSR (server-side-rendering), onde o Node renderiza o componente antes da requisição do cliente chegar. Por sua vez o Gatsby é um SSG (static site generator), ou seja, um gerador de sites estáticos.

Porém, vale ressaltar que o Gatsby não se limita a conteúdo estático, ele é meio que um híbrido, pois permite utilizar conteúdo dinâmico, conectar com um CMS e até mesmo utilizar SSR. Nessa série iremos focar principalmente na parte estática.


import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);