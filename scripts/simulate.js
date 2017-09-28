(
    function () {
        function handleSimulate (e) {
            e.preventDefault()
            // ?investedAmount=1000&index=CDI&rate=100&isTaxFree=false&maturityDate=2017-12-25
            const URL_API_SIMULATOR = 'http://easynvestsimulatorcalcapi.azurewebsites.net/calculator/simulate'

            const investedAmount = document.querySelector('input[name=investedAmount]').value
            const maturityDate = document.querySelector('input[name=maturityDate]').value
            const rate = document.querySelector('input[name=rate]').value

            console.log(investedAmount, maturityDate, rate)

            axios.get(URL_API_SIMULATOR, {
                params: {
                    investedAmount: investedAmount,
                    index: 'CDI',
                    rate: rate,
                    isTaxFree: false,
                    maturityDate: maturityDate
                }
            })
            .then(response => {
                console.log(response)
                document.querySelector('.iz-box.simulation').classList.remove('active')
                document.querySelector('.iz-box.result').classList.add('active')
            })
            .catch(response => console.error(response))
        }

        document.querySelector('.iz-btn-simular').addEventListener('click', handleSimulate)   
    }
)()
