(
    function() {
        const validateForm = () => {
            const today = moment(new Date())
            
            const maturityDate =  moment(simulator.simulation.elements.maturityDate.value, 'DD/MM/YYYY')
            const dateIsValid = simulator.simulation.elements.maturityDate.value.length === 10 && today.isBefore(maturityDate)
            const souldSubmit = simulator.simulation.elements.investedAmount.value && simulator.simulation.elements.rate.value && dateIsValid

            if(souldSubmit)
                simulator.simulation.elements.simulateButton.removeAttribute('disabled')
            else
                simulator.simulation.elements.simulateButton.setAttribute('disabled', '')
        }

        simulator.simulation.applyValidations = function() {
            simulator.simulation.elements.investedAmount.addEventListener('keyup', validateForm)
            simulator.simulation.elements.maturityDate.addEventListener('keyup', validateForm)
            simulator.simulation.elements.rate.addEventListener('keyup', validateForm)
        }
    }

)()