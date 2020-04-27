<template>
  <div>
      <p>Essa é a aula principal do curso</p>
  </div>
</template>

<script>
export default {
    name: "AulaDescricao",
    created() {
        console.log("descrição criado")
    },
    destroyed() {
        console.log("descrição destruído")
    },
}
</script>

<style>

</style>