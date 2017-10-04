(
    function() {
        simulator.simulation.setMasks = function() {
            vanillaTextMask.maskInput({
                inputElement: simulator.simulation.elements.investedAmount,
                mask: createNumberMask.default({
                    prefix: 'R$ ',
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true,
                    integerLimit: 7
                })
            })
        
            vanillaTextMask.maskInput({
                inputElement: simulator.simulation.elements.maturityDate,
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                guide: false
            })
        
            vanillaTextMask.maskInput({
                inputElement: simulator.simulation.elements.rate,
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
    }
)()