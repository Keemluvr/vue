<template>
    <div>
        <!-- transition-group -->
        <ul>
            <transition-group name="fade" mode="out-in">
            <li v-for="(produto, index) in carrinho" :key="produto.nome">
                <p>{{produto.nome}}</p>
                <p>R$ {{produto.preco}}</p>
                <button @click="remover(index)">Remover</button>
            </li>
            </transition-group>
        </ul>

        <!-- v-move -->
        <button @click="filtroAZ">A - Z</button>
        <button @click="filtroZA">Z - A</button>

        <transition-group name="fade" tag="ul">
            <li v-for="filme in filmes" :key="filme">{{filme}}</li>
        </transition-group>
    </div>
</template>
<script>
export default {
  data() {
    return {
      carrinho: [
        {
          nome: "Notebook",
          preco: 2399
        },
        {
          nome: "Smartphone",
          preco: 1399
        }
      ],
      filmes: [
        "O Senhor dos Aneis",
        "As Crônicas de Nárnia",
        "Coração Valente",
        "Harry Potter"
      ]
    };
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    },
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }
    .fade-move {
    transition: transform 1s;
    }

    li {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: white;
    padding: 20px;
    max-width: 200px;
    margin-bottom: 10px;
    }
</style>
