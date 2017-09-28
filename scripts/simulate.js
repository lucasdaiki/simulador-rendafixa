(
    function () {
        function handleSimulate (e) {
            e.preventDefault()
            const URL_API_SIMULATOR = 'http://easynvestsimulatorcalcapi.azurewebsites.net/calculator/simulate'

            const investedAmount = document.querySelector('input[name=investedAmount]').value
            const maturityDate = document.querySelector('input[name=maturityDate]').value
            const rate = document.querySelector('input[name=rate]').value

            console.log(investedAmount, maturityDate, rate)

            axios.get(URL_API_SIMULATOR, {
                params: {
                    investedAmount: investedAmount.replace(/\./g, '').replace('R$', '').trim(),
                    index: 'CDI',
                    rate: rate.replace(/\./g, '').replace('%', '').trim(),
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

        function init() {
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
