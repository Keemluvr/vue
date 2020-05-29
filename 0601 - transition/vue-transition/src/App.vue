<template>
  <div id="app">
    <!--
    v-enter (adicionada antes do elemento ser inserido)
    v-enter-active (adicionada durante a animação)
    v-enter-to (adicionada assim que a animação termina)
    v-leave (adicionada assim que o elemento começa a sair)
    v-leave-active (adicionada enquanto o elemento está saindo)
    v-leave-to (adicionada quando o elemento saiu)

    São classes adicionadas pelos vue.
    O nome inicial (v) depende do atributo name
    -->
    <!-- transition -->
    <h1 class="content">------ Transition -------</h1>
    <button @click="ativo = !ativo">Mostrar</button>
    <transition name="fade">
      <img alt="Vue logo" src="./assets/logo.png" v-if="ativo">
    </transition>
    <transition name="fade"
      enter-active-class="animar"
      enter-to-class="animou">
      <img alt="Vue logo" src="./assets/logo.png" v-if="ativo">
    </transition>

    <!-- hooks -->
    <h1 class="content">------ Hooks -------</h1>
    <button @click="ativoHooks = !ativoHooks">Mostrar</button>
    <transition name="fade" @enter="enter" @leave="leave">
      <img alt="Vue logo" src="./assets/logo.png" v-if="ativoHooks">
    </transition>

    <!-- appear -->
    <h1 class="content">------ Appear -------</h1>
    <transition name="fade" appear>
      <img alt="Vue logo" src="./assets/logo.png">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ativo: false,
      ativoHooks: false
    }
  },
  methods: {
    enter(element) {
      console.log(element)
    },
    leave(element) {
      console.log(element)
    }
  },
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button, img {
    margin: 0 auto;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 3s;
  }

  h1.content {
    text-align: center;
    color: blueviolet;
  }

</style>
