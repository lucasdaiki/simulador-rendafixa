(
    function() {
        simulator.simulation.handleSimulate = function (e) {
            e.preventDefault()
            
            simulator.simulation.elements.simulateButton.classList.add('loading')
            simulator.simulation.elements.simulateButton.setAttribute('disabled', '')

            const investedAmount = simulator.simulation.elements.investedAmount
                .value
                .replace(/\./g, '')
                .replace(/\,/g, '.')
                .replace('R$', '')
                .trim()

            const rate = simulator.simulation.elements.rate
                .value
                .replace(/\,/g, '.')
                .replace('%', '')
                .trim()

            const maturityDate = simulator.dateParsers.toAPI(
                simulator.simulation.elements.maturityDate.value
            )
            
            const params = new URLSearchParams()
            params.append('investedAmount', investedAmount)
            params.append('rate', rate)
            params.append('maturityDate', maturityDate)

            window.location.href = `results?${params.toString()}`
        }

    }
)()