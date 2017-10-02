(
    function() {
        function init() {
            const today = new Date()
            const todayElement = document.querySelector('span[data-attr="today"]')
            todayElement.appendChild(document.createTextNode(simulator.dateParsers.fromAPI(today)))
        
            document.querySelector('.iz-btn-simular').addEventListener('click', handleSimulate)
            document.querySelector('.iz-form').addEventListener('submit', handleSimulate)
            
            document.querySelector('.iz-btn-again').addEventListener('click', function () {
                document.querySelector('.iz-box.simulation').classList.add('active')
                document.querySelector('.iz-box.result').classList.remove('active')
            })

            setInputHandles()
        }

        function setInputHandles() {
            const investedAmountElement = document.querySelector('input[name=investedAmount]')
            const maturityDateElement = document.querySelector('input[name=maturityDate]')
            const rateElement = document.querySelector('input[name=rate]')

            function validateForm() {
                const today = moment(new Date())
                const maturityDate =  moment(maturityDateElement.value, 'DD/MM/YYYY')
                const dateIsValid = maturityDateElement.value.length === 10 && today.isBefore(maturityDate)
                const souldSubmit = investedAmountElement.value && rateElement.value && dateIsValid

                if(souldSubmit)
                    document.querySelector('.iz-btn-simular').removeAttribute('disabled')
                else
                    document.querySelector('.iz-btn-simular').setAttribute('disabled', true)
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
            const investedAmount = document.querySelector('input[name=investedAmount]').value
            const maturityDate = document.querySelector('input[name=maturityDate]').value
            const rate = document.querySelector('input[name=rate]').value
      
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
                document.querySelector('.iz-box.simulation').classList.remove('active')
                document.querySelector('.iz-box.result').classList.add('active')
      
                document.querySelector('input[name=investedAmount]').value = ''
                document.querySelector('input[name=maturityDate]').value = ''
                document.querySelector('input[name=rate]').value = ''
      
                simulator.results.fillResults(response.data)             
      
              })
              .catch(response => console.error(response))
          }

        init()
    }
)()
