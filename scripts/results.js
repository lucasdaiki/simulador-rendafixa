(
    function () {
        simulator.results = {}
        simulator.results.fillResults = (fields) => {
            getFieldsToFill(fields).forEach(field => fillField(field.fieldName, field.value))
        }
        
        const MASKS = {
            MONEY: value => VMasker.toMoney(value.toString()),
            PERCENTAGE: value => `(${value.toString().replace('.', ',')}%)`,
            DATE: simulator.dateParsers.fromAPI
        }

        const fillField = (fieldName, value) => {
            document
                .querySelectorAll(`[data-attr="${fieldName}"]`)
                .forEach(e => { e.textContent = value; })
        }

        const getFieldsToFill = (fields) => [
            {
                fieldName: 'grossAmount',
                value: MASKS.MONEY(fields.grossAmount)
            },
            {
                fieldName: 'grossAmountProfit',
                value: MASKS.MONEY(fields.grossAmountProfit)
            },
            {
                fieldName: 'investedAmount',
                value: MASKS.MONEY(fields.investmentParameter.investedAmount)
            },
            {
                fieldName: 'grossAmount',
                value: MASKS.MONEY(fields.grossAmount)
            },
            {
                fieldName: 'grossAmountProfit',
                value: MASKS.MONEY(fields.grossAmountProfit)
            },
            {
                fieldName: 'taxesAmount',
                value: MASKS.MONEY(fields.taxesAmount)
            },
            {
                fieldName: 'taxesRate',
                value: MASKS.PERCENTAGE(fields.taxesRate)
            },
            {
                fieldName: 'netAmount',
                value: MASKS.MONEY(fields.netAmount)
            },
            {
                fieldName: 'maturityDate',
                value: MASKS.DATE(fields.investmentParameter.maturityDate)
            },
            {
                fieldName: 'maturityTotalDays',
                value: MASKS.MONEY(fields.investmentParameter.maturityTotalDays)
            },
            {
                fieldName: 'monthlyGrossRateProfit',
                value: MASKS.MONEY(fields.monthlyGrossRateProfit)
            },
            {
                fieldName: 'rate',
                value: MASKS.MONEY(fields.investmentParameter.rate)
            },
            {
                fieldName: 'annualGrossRateProfit',
                value: MASKS.MONEY(fields.annualGrossRateProfit)
            },
            {
                fieldName: 'rateProfit',
                value: MASKS.MONEY(fields.rateProfit)
            }
        ]

    }
)()