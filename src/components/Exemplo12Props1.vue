<script setup lang="ts">
    import { ref } from 'vue';
    import Exemplo12Props2 from './Exemplo12Props2.vue';
    const nome = ref<string>('Andrés');
    const idade = ref<string>('22');
</script>

<template>
    <Exemplo12Props2 :nome="nome" :idade="idade"></Exemplo12Props2>
</template>