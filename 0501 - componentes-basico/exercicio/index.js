import TempoHoje from './components/TempoHoje.js'
import CovidHoje from './components/CovidHoje.js'

Vue.component("TempoHoje", TempoHoje)

const vm = new Vue({
    el: "#app",
    components: {
        CovidHoje
    }
})