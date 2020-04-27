<template>
    <div>
        <h3>Entrar em contato</h3>
        <form>
            <label for="nome">Nome</label>
            <input id="nome" type="text">
            <label for="email">Email</label>
            <input type="email">
            <button>Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ContatoEmpresa",
    created() {
        console.log("contato criado")
    },
    destroyed() {
        console.log("contato destruído")
    },
}
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
</style>