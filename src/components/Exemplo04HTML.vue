<script setup>
let texto = '<p style="color:red">Texto em <strong>negrito</strong></p>';
</script>

<template>
    <div v-html="texto"></div>
    <div>{{ texto }}</div>
 </template>