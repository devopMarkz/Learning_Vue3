<script setup>
    import { ref } from 'vue';

    let booleano = ref(true);
    
    function exibirMensagem() {
        booleano.value = !booleano.value;
    }
</script>

<template>
    <button @click="exibirMensagem" :class="booleano ? 'ativo' : 'inativo'">Clique</button>
</template>

<style>
    .ativo {
        font-size: 90px;
    }
    .inativo {
        font-size: 12px;
    }
</style>