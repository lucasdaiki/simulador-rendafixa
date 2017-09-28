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
                document.querySelector('.iz-box.simulation').classList.remove('active')
                document.querySelector('.iz-box.result').classList.add('active')
                fillSimulate(response.data)
            })
            .catch(response => console.error(response))
        }
        function fillSimulate(data) {
            let grossAmount = document.querySelector('p[data-attr="grossAmount"]')
            grossAmount.appendChild(document.createTextNode(data.grossAmount))

            let grossAmountProfit = document.querySelector('span[data-attr="grossAmountProfit"]')
            grossAmountProfit.appendChild(document.createTextNode(data.grossAmountProfit))

            let investedAmount = document.querySelector('td[data-attr="investedAmount"]')
            investedAmount.appendChild(document.createTextNode(data.investmentParameter.investedAmount))

            let tdGrossAmount = document.querySelector('td[data-attr="grossAmount"]')
            tdGrossAmount.appendChild(document.createTextNode(data.grossAmount))

            let tdGrossAmountProfit = document.querySelector('td[data-attr="grossAmountProfit"]')
            tdGrossAmountProfit.appendChild(document.createTextNode(data.grossAmountProfit))

            let taxesAmount = document.querySelector('span[data-attr="taxesAmount"]')
            taxesAmount.appendChild(document.createTextNode(data.taxesAmount))      
            debugger      

            let taxesPercent = document.querySelector('span[data-attr="taxesPercent"]')
            taxesAmount.appendChild(document.createTextNode(` (${data.taxesPercent} %)`))  

            let netAmount = document.querySelector('td[data-attr="netAmount"]')
            netAmount.appendChild(document.createTextNode(data.netAmount))

            let maturityDate = document.querySelector('td[data-attr="maturityDate"]')
            maturityDate.appendChild(document.createTextNode(convertDate(data.investmentParameter.maturityDate)))

            let maturityTotalDays = document.querySelector('td[data-attr="maturityTotalDays"]')
            maturityTotalDays.appendChild(document.createTextNode(data.investmentParameter.maturityTotalDays))

            let monthlyGrossRateProfit = document.querySelector('td[data-attr="monthlyGrossRateProfit"]')
            monthlyGrossRateProfit.appendChild(document.createTextNode(data.monthlyGrossRateProfit))

            let rate = document.querySelector('td[data-attr="rate"]')
            rate.appendChild(document.createTextNode(data.investmentParameter.rate))

            let annualGrossRateProfit = document.querySelector('td[data-attr="annualGrossRateProfit"]')
            annualGrossRateProfit.appendChild(document.createTextNode(data.annualGrossRateProfit))
        }
        function convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat);
            return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
        }

        document.querySelector('.iz-btn-simular').addEventListener('click', handleSimulate)   
    }
)()
