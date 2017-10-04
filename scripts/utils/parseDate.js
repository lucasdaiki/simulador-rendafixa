(
    function() {
        simulator.dateParsers = {
            toAPI: date => date.split('/').reverse().join('-'),
            fromAPI: date =>  moment(date).format('DD/MM/YYYY')
        }
    }
)()