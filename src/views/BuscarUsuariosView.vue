<template>
  <div class="view-container">
    <BuscarUsuarios />
  </div>
</template>

<script>
import BuscarUsuarios from '@/components/BuscarUsuarios.vue';

export default {
  name: 'BuscarUsuariosView',
  components: {
    BuscarUsuarios
  }
}
</script>

<style scoped>
.view-container {
  padding: 20px;
}
</style>