<script setup>
    function mostrarMensagem(event) {
        alert(`Tecla pressionada: ${event.key}`);
    } 
</script>

<template>
    <input type="text" @keypress="mostrarMensagem" placeholder="Pressione uma tecla" />
</template>