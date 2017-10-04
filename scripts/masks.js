(
    function() {
        const moneyMask = value =>{
            const fixedValue = value.toFixed(2).toString()
            return VMasker.toMoney(fixedValue)
        }

        const numberMask = value => {
            const fixedValue = value.toFixed(2).toString()
            const numberValue = VMasker.toMoney(fixedValue)
            return numberValue.replace(/,00$/g, '') // Ignorar decimais se terminar com '00'
        }

        simulator.masks = {
            MONEY: moneyMask,
            NUMBER: numberMask,
            PERCENTAGE: numberMask,
            DATE: simulator.dateParsers.fromAPI
        }
    }
)()