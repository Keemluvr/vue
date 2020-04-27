import DolarHoje from './DolarHoje.js'

export default {
    name: "CovidHoje",
    data() {
        return {
            covid: {},
        }
    },
    created() {
        fetch('https://api.covid19api.com/total/country/brazil/status/confirmed')
            .then( response => response.json())
            .then( json => {
                this.covid = json[json.length-1]
            })
    },
    template: `
        <div class="card">
            <h1>Covid Hoje</h1>
            <p>{{covid.Country}}</p>
            <p>Confirmados - {{covid.Cases}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    components: {
        DolarHoje
    }
}