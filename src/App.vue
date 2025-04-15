<!-- SCRIPT -->
<script setup lang="ts">
  // Importação dos componentes
  // import Exemplo01 from "./components/Exemplo01Interpolacao.vue";
  // import Exemplo02 from "./components/Exemplo02Condicional.vue";
  //import Exemplo03 from "./components/Exemplo03Laco.vue";
  // import Exemplo04 from "./components/Exemplo04HTML.vue";
  // import Exemplo05 from "./components/Exemplo05Model.vue";
  // import Exemplo06 from './components/Exemplo06Classe.vue'
  // import Exemplo07 from './components/Exemplo07Click.vue'
  // import Exemplo08 from './components/Exemplo08Teclado.vue'
  // import Exemplo08Test from './components/Exemplo08TesteTeclado.vue'
  // import Exemplo09 from './components/Exemplo09Submit.vue'
  import { ref } from 'vue';
import Exemplo10 from './components/Formulario.vue'

  const txt = ref('aaaa');
</script>

<!-- TEMPLATE -->
<!-- HTML -->
<template>
  <v-app>
    {{ txt }}
  <Exemplo10></Exemplo10>
  </v-app>
 
</template>