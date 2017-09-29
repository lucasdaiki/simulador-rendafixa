# Simulador de Renda Fixa Pré e Pós
Existem. vários simuladores de Renda Fixa Pré e Pós fixados no mercado. Mas maioria deles não tem as taxas atualizadas automaticamente ou não fazem a projeção do CDI futuro da maneira correta. Esse projeto foi criado pelos desenvolvedores da Easynvest, onde o objetivo é entregar um simulador de Renda Fixa para o mercado, projetando o CDI futuro com taxas atualizadas diretamente da Anbima.

Você pode ver esse simulador funcionando aqui:
[https://easynvest.github.io/simulador-rendafixa/](https://easynvest.github.io/simulador-rendafixa/)

Se quiser fazer nós usamos basicamente 3 endpoints de APIs que nos devolvem as informações necessárias:

1. https://easynvestsimulatorcalcapi.azurewebsites.net/calculator/simulate
1. endpoint dois
1. endpoint tres

Se quiser, fique à vontade para usar esses endpoints em projetos pessoais.

# Para rodar esse projeto
Clonando o projeto, use o comando `npm install` na raiz do projeto.
Depois rode o comando `gulp` para rodar o projeto.