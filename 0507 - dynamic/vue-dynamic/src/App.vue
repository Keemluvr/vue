<template>
  <div id="app">
    <h1 class="content">------ Dynamic -------</h1>
    <button @click="componenteAtivo = 'AulaDescricao'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

    <br><br><br>
    <h1 class="content">------ Exercício -------</h1>
    <button @click="componenteAtivoEmpresa = 'SobreEmpresa'">Sobre</button>
    <button @click="componenteAtivoEmpresa = 'ServicosEmpresa'">Serviços</button>
    <button @click="componenteAtivoEmpresa = 'ContatoEmpresa'">Contato</button>
    <keep-alive>
      <component :is="componenteAtivoEmpresa"></component>
    </keep-alive>
  </div>
</template>
<script>
import AulaDescricao from "./components/AulaDescricao"
import AulaDownload from "./components/AulaDownload"

import SobreEmpresa from "./components/SobreEmpresa"
import ServicosEmpresa from "./components/ServicosEmpresa"
import ContatoEmpresa from "./components/ContatoEmpresa"

export default {
  name: 'App',
  components: {
    AulaDescricao,
    AulaDownload,
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa
  },
  data() {
    return {
      componenteAtivo: 'AulaDescricao',
      componenteAtivoEmpresa: 'SobreEmpresa'
    }
  },
}
</script>

<style>
  h1.content {
    text-align: center;
    color: blueviolet;
  }
</style>
