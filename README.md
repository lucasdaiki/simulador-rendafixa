# Simulador de Renda Fixa Pré e Pós
Existem. vários simuladores de Renda Fixa Pré e Pós fixados no mercado. Mas maioria deles não tem as taxas atualizadas automaticamente ou não fazem a projeção do CDI futuro da maneira correta. Esse projeto foi criado pelos desenvolvedores da Easynvest, onde o objetivo é entregar um simulador de Renda Fixa para o mercado, projetando o CDI futuro com taxas atualizadas diretamente da Anbima.

Você pode ver esse simulador funcionando aqui:
[https://easynvest.github.io/simulador-rendafixa/](https://easynvest.github.io/simulador-rendafixa/)

## Como é feito o cálculo?
Criamos um serviço para fazer esse cálculo. Sinta-se a vontade para utilizá-lo :D

## Consumindo o serviço de cálculo
 - **URL**: https://easynvestsimulatorcalcapi.azurewebsites.net/calculator/simulate
 - **Method**: POST
 - **URL Params**: 
    ```javascript
    {
        investedAmount: 32323.0                 // Valor a investir em reais
        index: "CDI"                            // Índice, por enquanto só CDI disponível
        rate: 123                               // Percentual do papel
        isTaxFree: false                        // Isento de IR, por enquanto só falso
        maturityDate: "2023-03-03"              // Data do vencimento, no formato ano-mes-dia
    }
    ```
 - **Response**
    ```javascript
    {
        "investmentParameter": {
            "investedAmount": 32323.0,                      // O valor a ser investido
            "yearlyInterestRate": 9.5512,                   // Rentabilidade anual
            "maturityTotalDays": 1981,                      // Dias corridos
            "maturityBusinessDays": 1409,                   // Dias úteis
            "maturityDate": "2023-03-03T00:00:00",          // Data de vencimento
            "rate": 123.0,                                  // Percentual do papel
            "isTaxFree": false                              // Isento de IR
        },
        "grossAmount": 60528.20,                            // Valor bruto do investimento
        "taxesAmount": 4230.78,                             // Valor do IR
        "netAmount": 56297.42,                              // Valor líquido
        "grossAmountProfit": 28205.20,                      // Rentabilidade bruta
        "netAmountProfit": 23974.42,                        // Rentabilidade líquida
        "annualGrossRateProfit": 87.26,                     // Rentabilidade bruta anual
        "monthlyGrossRateProfit": 0.76,                     // Rentabilidade bruta mensal
        "dailyGrossRateProfit": 0.000445330025305748,       // Rentabilidade bruta diária
        "taxesRate": 15.0,                                  // Faixa do IR (%)
        "rateProfit": 9.5512,                               // Rentabilidade no período
        "annualNetRateProfit": 74.17                        // Rentabilidade líquida anual
    }
    ```

## Para rodar esse projeto
Execute o famoso
`npm install && npm start`
e tudo pronto para começar :D
