(
    function() {
        const todayElement = document.querySelector('span[data-attr="today"]')
        
        const simulationBoxElement = document.querySelector('.iz-box.simulation')
        const resultBoxElement = document.querySelector('.iz-box.result')

        const formElement = document.querySelector('.iz-form')
        const simulateButtonElement = document.querySelector('.iz-btn-simular')
        const againButtonElement = document.querySelector('.iz-btn-again')

        const investedAmountElement = document.querySelector('input[name=investedAmount]')
        const maturityDateElement = document.querySelector('input[name=maturityDate]')
        const rateElement = document.querySelector('input[name=rate]')
        
        function init() {
            const today = new Date()
            todayElement.appendChild(document.createTextNode(simulator.dateParsers.fromAPI(today)))
        
            simulateButtonElement.addEventListener('click', handleSimulate)
            formElement.addEventListener('submit', handleSimulate)

            againButtonElement.addEventListener('click', function () {
                simulationBoxElement.classList.add('active')
                resultBoxElement.classList.remove('active')
            })

            setInputHandles()
        }

        function setInputHandles() {

            function validateForm() {
                const today = moment(new Date())
                const maturityDate =  moment(maturityDateElement.value, 'DD/MM/YYYY')
                const dateIsValid = maturityDateElement.value.length === 10 && today.isBefore(maturityDate)
                const souldSubmit = investedAmountElement.value && rateElement.value && dateIsValid

                if(souldSubmit){
                    simulateButtonElement.removeAttribute('disabled')
                }
                else
                    simulateButtonElement.setAttribute('disabled', '')
            }
            
            investedAmountElement.addEventListener('keyup', validateForm)
            maturityDateElement.addEventListener('keyup', validateForm)
            rateElement.addEventListener('keyup', validateForm)

            vanillaTextMask.maskInput({
                inputElement: investedAmountElement,
                mask: createNumberMask.default({
                    prefix: 'R$ ',
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true,
                    integerLimit: 7
                })
            })
        
            vanillaTextMask.maskInput({
                inputElement: maturityDateElement,
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                guide: false
            })
        
            vanillaTextMask.maskInput({
                inputElement: rateElement,
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

        function handleSimulate (e) {
            e.preventDefault()
            const investedAmount = investedAmountElement.value
            const maturityDate = maturityDateElement.value
            const rate = rateElement.value
            
            simulateButtonElement.setAttribute('disabled', '')
            simulateButtonElement.classList.add('loading')

            axios.get(simulator.configs.URL_API_SIMULATOR, {
              params: {
                investedAmount: investedAmount.replace(/\./g, '').replace(/\,/g, '.').replace('R$', '').trim(),
                index: 'CDI',
                rate: rate.replace(/\,/g, '.').replace('%', '').trim(),
                isTaxFree: false,
                maturityDate:  simulator.dateParsers.toAPI(maturityDate)
              }
            })
            .then(response => {
                simulator.results.fillResults(response.data)             
                resultBoxElement.classList.add('active')
                
                simulateButtonElement.classList.remove('loading')
                simulationBoxElement.classList.remove('active')
                investedAmountElement.value = ''
                maturityDateElement.value = ''
                rateElement.value = ''
            })
            .catch(response => console.error(response))
          }

        init()
    }
)()
