<script setup>
    import { ref } from 'vue';
    let dados = ref('');

    function enviarDados(event){
        event.preventDefault();
        dados.value = document.querySelector("input").value;
        document.querySelector("form").reset();
    }
</script>

<template>
    <form @submit="enviarDados">
        <input type="text">
        <input type="submit" value="Enviar">
    </form>
    <p>{{ dados }}</p>
</template>