<script setup>
    import { ref } from 'vue';
    let texto = ref('');
</script>

<template>
    <input type="text" v-model="texto" placeholder="Digite algo aqui..." />
    <p> {{ texto }} </p>
</template>