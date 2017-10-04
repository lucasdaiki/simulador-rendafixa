(
    function() {
        simulator.simulation.elements = {
            form: document.querySelector('.iz-form'),
            simulateButton: document.querySelector('.iz-btn-simular'),
            investedAmount: document.querySelector('input[name=investedAmount]'),
            maturityDate: document.querySelector('input[name=maturityDate]'),
            rate: document.querySelector('input[name=rate]')
        }
                
        function init() {
            simulator.simulation.applyValidations()
            simulator.simulation.setMasks()

            simulator.simulation.elements.simulateButton.addEventListener('click', simulator.simulation.handleSimulate)
            simulator.simulation.elements.form.addEventListener('submit', simulator.simulation.handleSimulate)
        }

        init()
    }
)()
