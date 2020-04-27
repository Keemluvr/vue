export default {
  name: "BotaoContador2",
  data() {
    return {
      contador: 0
    };
  },
  template: `<button @click="contador++">Contar: {{contador}}</button>`
};
