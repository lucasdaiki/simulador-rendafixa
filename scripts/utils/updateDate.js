(
    function() {
        const today = simulator.dateParsers.fromAPI(new Date())
        document.querySelector('span[data-attr="today"]').textContent = today
    }
)()