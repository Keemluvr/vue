export default {
    name: "TempoHoje",
    data() {
        return {
            tempo: {},
            tempoDias: {}
        }
    },
    created() {
        fetch('https://www.metaweather.com/api/location/455825/')
            .then( response => response.json())
            .then( json => {
                this.tempo = json
                this.tempoDias = json.consolidated_weather
            })
    },
    template: `
        <div class="card">
            <h1>Tempo Hoje</h1>
            <h2>{{tempo.title}}</h2>
            <ul>
                <li class="item" v-for="dia in tempoDias">
                    <p><b>Data: {{dia.applicable_date}}</b></p>
                    <p>Situação: {{dia.weather_state_name}}</p>
                    <p>Temperatura mínima: {{dia.min_temp}}</p>
                    <p>Temperatura máxima: {{dia.max_temp}}</p>
                </li>
            </ul>
        </div>
    `
}