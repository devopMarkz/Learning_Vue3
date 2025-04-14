<script setup>
let nomes = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
</script>

<template>
    <ul>
        <li v-for="nome in nomes">
            {{ nome }}
        </li>
    </ul>
</template>