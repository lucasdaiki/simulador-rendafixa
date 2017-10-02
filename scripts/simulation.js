(
    function() {
        function init() {
            let today = document.querySelector('span[data-attr="today"]')
            today.appendChild(document.createTextNode(simulator.dateParsers.fromAPI(new Date())))
        
            document.querySelector('.iz-btn-simular').addEventListener('click', handleSimulate)
        
            document.querySelector('.iz-btn-again').addEventListener('click', function () {
                document.querySelector('.iz-box.simulation').classList.add('active')
                document.querySelector('.iz-box.result').classList.remove('active')
            })
        
            vanillaTextMask.maskInput({
                inputElement: document.querySelector('input[name=investedAmount]'),
                mask: createNumberMask.default({
                    prefix: 'R$ ',
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true,
                    integerLimit: 7
                })
            })
        
            vanillaTextMask.maskInput({
                inputElement: document.querySelector('input[name=maturityDate]'),
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
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
      
                simulator.simulation.fillResults(response.data)             
      
              })
              .catch(response => console.error(response))
          }

        init()
    }
)()
