(
    function () {
        function init() {
            const urlParams = new URLSearchParams(window.location.search)
            const params = {
                rate: urlParams.get('rate'),
                investedAmount: urlParams.get('investedAmount'),
                maturityDate: urlParams.get('maturityDate')
            }

            simulator.calculate(params)
                .then(simulator.results.getFieldsToFill)
                .then(fillFields)
        }

        const fillFields = (fieldsToFill) => {
            fieldsToFill.forEach(field => {
                document
                    .querySelectorAll(`[data-attr="${field.fieldName}"]`)
                    .forEach(e => { e.textContent = field.value; })
            })
        }

        init()
    }
)()