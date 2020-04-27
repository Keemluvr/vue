// vue.component()
Vue.component("BotaoContador", {
  data() {
    return {
      count: 0
    };
  },
  template: `<button @click="count++">Contador {{count}}</button>`
});

const vm = new Vue({
    el: "#app"
});
  



// global vc local
const ComponenteLocal = {
  name: "ComponenteLocal",
  template: `<p>Local</p>`
};

Vue.component("ComponenteGlobal", {
  template: `<p>Global</p>`
});

const vm1 = new Vue({
  el: "#app1",
  components: {
    ComponenteLocal
  }
});




// pascalcase vs kebab-case
const ComponenteLocal2 = {
  name: "ComponenteLocal2", // pascalcase
  template: `<p>Local</p>`
};

Vue.component("ComponenteGlobal2", {
  template: `<p>Global</p>`
});

const vm2 = new Vue({
  el: "#app2",
  components: {
    ComponenteLocal2
  }
});



// module import/export
import BotaoContador2 from "./BotaoContador.js";
import MenuPrincipal from "./MenuPrincipal.js";

Vue.component("MenuPrincipal", MenuPrincipal);

const vm3 = new Vue({
  el: "#app3",
  components: {
    BotaoContador2
  }
});




// componente dentro de componente
const MenuPrincipal2 = {
  name: "MenuPrincipal2",
  template: `
    <ul>
      <li>Home</li>
      <li>Contato</li>
      <botao-login></botao-login>
    </ul>
  `
};

const BotaoLogin = {
  name: "BotaoLogin",
  template: `<button>Login</button>`
};

Vue.component("BotaoLogin", BotaoLogin);

const vm4 = new Vue({
  el: "#app4",
  components: {
    MenuPrincipal2
  }
});




// Entenda a sintaxe javascript
function component(string, objeto) {
  /* código da função */
}

const OpcoesComponente = {
  template: `<div>Menu Principal</div>`
};

component("MenuPrincipal", OpcoesComponente);




// Exercícios
