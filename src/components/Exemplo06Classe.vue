<script setup>
    let validacao = true;
</script>

<style>
    .valido {
        color: green;
    }
    .invalido {
        color: red;
    }
</style>

<template>
    <p :class="validacao ? 'valido' : 'invalido'">Utilizando diretiva class</p>
</template>