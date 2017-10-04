(
    function() {
        simulator.results.getFieldsToFill = (fields) => [
            {
                fieldName: 'grossAmount',
                value: simulator.masks.MONEY(fields.grossAmount)
            },
            {
                fieldName: 'grossAmountProfit',
                value: simulator.masks.MONEY(fields.grossAmountProfit)
            },
            {
                fieldName: 'investedAmount',
                value: simulator.masks.MONEY(fields.investmentParameter.investedAmount)
            },
            {
                fieldName: 'grossAmount',
                value: simulator.masks.MONEY(fields.grossAmount)
            },
            {
                fieldName: 'grossAmountProfit',
                value: simulator.masks.MONEY(fields.grossAmountProfit)
            },
            {
                fieldName: 'taxesAmount',
                value: simulator.masks.MONEY(fields.taxesAmount)
            },
            {
                fieldName: 'taxesRate',
                value: simulator.masks.PERCENTAGE(fields.taxesRate)
            },
            {
                fieldName: 'netAmount',
                value: simulator.masks.MONEY(fields.netAmount)
            },
            {
                fieldName: 'maturityDate',
                value: simulator.masks.DATE(fields.investmentParameter.maturityDate)
            },
            {
                fieldName: 'maturityTotalDays',
                value: simulator.masks.NUMBER(fields.investmentParameter.maturityTotalDays)
            },
            {
                fieldName: 'monthlyGrossRateProfit',
                value: simulator.masks.PERCENTAGE(fields.monthlyGrossRateProfit)
            },
            {
                fieldName: 'rate',
                value: simulator.masks.PERCENTAGE(fields.investmentParameter.rate)
            },
            {
                fieldName: 'annualGrossRateProfit',
                value: simulator.masks.PERCENTAGE(fields.annualGrossRateProfit)
            },
            {
                fieldName: 'rateProfit',
                value: simulator.masks.PERCENTAGE(fields.rateProfit)
            }
        ]
    }
)()