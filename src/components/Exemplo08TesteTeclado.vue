<script setup>
    import { ref } from 'vue';

    let dados = ref('');

    function mensagem(){
        dados.value = document.querySelector("input").value;
   }
    
</script>

<template>
    <input type="text" @keyup.enter="mensagem">
    <p>{{ dados }}</p>
</template>