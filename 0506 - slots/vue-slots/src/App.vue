<template>
  <div id="app">
    <!-- slots -->
    <h1 class="content">------ Slots -------</h1>
    <ModalPrincipal>
      <p>Teste</p>
    </ModalPrincipal>
    <br><br><br>

    <!-- named slots -->
    <h1 class="content">------ Named slots -------</h1>
    <ModalAlerta>
      <template #header>
        <p>Header do Slot</p>
      </template>
      <template #default>
        <button>Comprar</button>
      </template>
      <template #slotDynamic="{ user }">
        <p>{{user.nome}}</p>
      </template>
      <template #footer>
        <p>Esse é o footer do slot</p>
      </template>
    </ModalAlerta>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue"
import ModalAlerta from "./components/ModalAlerta.vue"

export default {
  name: 'App',
  components: {
    ModalPrincipal,
    ModalAlerta
  }
}
</script>

<style>
  h1.content {
    text-align: center;
    color: blueviolet;
  }
</style>

