(
    function() {
        simulator.calculate = function (params) {
            return axios.get(simulator.configs.URL_API_SIMULATOR, {
                params: {
                    investedAmount: params.investedAmount,
                    maturityDate: params.maturityDate,
                    rate: params.rate,
                    index: 'CDI',
                    isTaxFree: false,
                }
            })
            .then(response => response.data)
            .catch(response => console.error(response))
        }
    }
)()