<script setup lang="ts">
    const props = defineProps(['nome', 'idade']);
</script>

<template>
    <h1>{{ nome }}</h1>
    <h1>{{ idade }}</h1>
</template>