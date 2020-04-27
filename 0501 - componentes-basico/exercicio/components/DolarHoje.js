export default {
    name: "DolarHoje",
    data() {
        return {
            valorDolar: {},
            dolarReal: 0
        }
    },
    created() {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then( response => response.json())
            .then( json => {
                this.valorDolar = json
                this.dolarReal = json.rates.BRL.toFixed(2)
            })
    },
    template: `
        <div class="card">
            <h1>Dolar Hoje</h1>
            <p>{{valorDolar.date}}</p>
            <p>Real: {{dolarReal}}</p>
        </div>
    `,
}