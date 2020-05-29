<template>
    <!-- Entre elementos -->
    <!-- Modos de transição -->
    <div>
        <button @click="estoque++">Adicionar Estoque</button>
        <button @click="estoque = 0">Deletar Estoque</button>
        <transition name="fade" mode="out-in">
            <p v-if="estoque >= 5" key="estoque">{{estoque}} itens em estoque</p>
            <p v-else-if="estoque >= 1 && estoque < 5 " key="avabando">Itens quase acabando</p>
            <p v-else key="esgotado">Produto fora de estoque</p>
        </transition>

        <br><br><br>

        <!-- entre componentes -->
        <ul>
            <li @click="componenteAtivo = 'sobre'">Sobre</li>
            <li @click="componenteAtivo = 'servicos'">Serviços</li>
        </ul>
        <transition name="fade-2" mode="out-in">
            <component :is="componenteAtivo"></component>
        </transition>
    </div>
</template>

<script>
import sobre from "./sobre.vue";
import servicos from "./servicos.vue";

    export default {
        components: {
            sobre,
            servicos
        },
        data() {
            return {
                estoque: 0,
                componenteAtivo: "sobre"
            };
        }
    };
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-2-enter-active,
    .fade-2-leave-active {
        transition: all .3s;
    }

    .fade-2-enter,
    .fade-2-leave-to {
        opacity: 0;
        transform: translate3d(0, -20px, 0);
    }

    li {
        cursor: pointer;
    }
</style>