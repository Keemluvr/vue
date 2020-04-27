// events
const CustomButton = {
  template: `<button @click="emitirEvento">Emitir</button>`,
  methods: {
    emitirEvento() {
      this.$emit("meu-evento", "Minha Mensagem");
    }
  }
};

const vm = new Vue({
  el: "#app",
  data: {
    mensagem: ""
  },
  methods: {
    receberEvento(mensagem) {
      this.mensagem = mensagem;
    }
  },
  components: {
    CustomButton
  }
});



// eventos para atualizar props
const BotaoIncrementar = {
  props: ["contador"],
  template: `<button @click="incrementar">Emitir</button>`,
  data() {
    return {
      contadorComponente: this.contador
    };
  },
  methods: {
    incrementar() {
      this.contadorComponente++;
      this.$emit("update:contador", this.contadorComponente);
    }
  }
};

const vm1 = new Vue({
  el: "#app1",
  data: {
    contador: 0
  },
  components: {
    BotaoIncrementar
  }
});



// eventbus
const EventBus = new Vue();

const ComponenteUm = {
  name: "ComponenteUm",
  template: `<button @click="emitir">Emitir</button>`,
  methods: {
    emitir() {
      EventBus.$emit("meu-evento", "Emitir Essa Mensagem");
    }
  }
};

const ComponenteDois = {
  name: "ComponenteDois",
  data() {
    return {
      mensagem: ""
    };
  },
  template: `<p>{{mensagem}}</p>`,
  created() {
    EventBus.$on("meu-evento", event => {
      this.mensagem = event;
    });
  }
};

const vm2 = new Vue({
  el: "#app2",
  components: {
    ComponenteUm,
    ComponenteDois
  }
});


