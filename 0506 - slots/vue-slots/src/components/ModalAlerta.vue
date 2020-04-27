<template>
  <div class="modal">
    <header>
      <slot name="header" />
    </header>
    <section>
      <slot>Fallback se não tiver conteúdo</slot>
    </section>
    <section>
      <slot name="slotDynamic" :user="user">Fallback se não tiver conteúdo</slot>
    </section>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "ModalAlerta",
  data() {
    return {
      user: {
        nome: "Keila"
      }
    };
  }
};
</script>

<style>
header,
section,
footer {
  text-align: center;
}

header {
  border-bottom: 1px solid;
}
section {
  margin: 20px;
}
footer {
  border-top: 1px solid;
}
</style>