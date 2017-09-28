(
    function () {

        function handleSimulate (e) {
            e.preventDefault()
            const URL_API_SIMULATOR = 'https://easynvestsimulatorcalcapi.azurewebsites.net/calculator/simulate'

            const investedAmount = document.querySelector('input[name=investedAmount]').value
            const maturityDate = document.querySelector('input[name=maturityDate]').value
            const rate = document.querySelector('input[name=rate]').value

            axios.get(URL_API_SIMULATOR, {
                params: {
                    investedAmount: investedAmount.replace(/\./g, '').replace('R$', '').trim(),
                    index: 'CDI',
                    rate: rate.replace(/\./g, '').replace('%', '').trim(),
                    isTaxFree: false,
                    maturityDate: maturityDate.replace(/\//g, '-')
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

            let taxesRate = document.querySelector('span[data-attr="taxesRate"]')
            taxesAmount.appendChild(document.createTextNode(` (${data.taxesRate} %)`))  

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

        function init() {

            let today = document.querySelector('span[data-attr="today"]');
            today.appendChild(document.createTextNode(convertDate(new Date())))
            
            document.querySelector('.iz-btn-simular').addEventListener('click', handleSimulate)
    
            vanillaTextMask.maskInput({
                inputElement: document.querySelector('input[name=investedAmount]'),
                mask: createNumberMask.default({
                    prefix: 'R$',
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true,
                    integerLimit: 7
                })
            })
    
            vanillaTextMask.maskInput({
                inputElement: document.querySelector('input[name=maturityDate]'),
                mask: [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ],
                guide: false
            })
            
            vanillaTextMask.maskInput({
                inputElement: document.querySelector('input[name=rate]'),
                mask: createNumberMask.default({
                    prefix: '',
                    suffix: '%',
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true,
                    integerLimit: 3
                })
            })
        }

        init()
    }
)()
