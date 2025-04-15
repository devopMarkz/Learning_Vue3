<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    let texto = ref<string>('Hello World!');

    onMounted(() => {
        setTimeout(() => {
            texto.value = "Olá, mundo!";
        }, 3000);
    });
</script>

<template>
    <h1>{{ texto }}</h1>
</template>