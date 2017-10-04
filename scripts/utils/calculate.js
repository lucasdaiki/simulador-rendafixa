(
    function() {
        simulator.calculate = function (params) {
            console.log(params)
            const investedAmount = params.investedAmount
                .replace(/\./g, '')
                .replace(/\,/g, '.')
                .replace('R$', '')
                .trim()

            const rate = params.rate
                .replace(/\,/g, '.')
                .replace('%', '')
                .trim()

            const maturityDate = simulator.dateParsers.toAPI(params.maturityDate)
            
            return axios.get(simulator.configs.URL_API_SIMULATOR, {
                params: {
                    investedAmount: investedAmount,
                    maturityDate:  maturityDate,
                    rate: rate,
                    index: 'CDI',
                    isTaxFree: false,
                }
            })
            .then(response => response.data)
            .catch(response => console.error(response))
        }
    }
)()