<template>
  <div class="usuarios-container">
    <h2>Buscar Usuarios</h2>

    <input
      type="text"
      v-model="texto"
      placeholder="Escribe algo..."
    />

    <p>{{ mensaje }}</p>

    <button @click="buscarUsuario">Buscar Usuario</button>

    <ul>
      <li v-for="(user, index) in usuarios" :key="index">
        {{ user.nombre }} - {{ user.email }}
        <br>
        <img :src="user.foto" width="80">
      </li>
    </ul>
  </div>
</template>

<script>
import { consumirApiFacade } from '@/clients/RandomUserClient';

export default {
  data() {
    return {
      texto: '',
      mensaje: '',
      usuarios: []
    };
  },

  watch: {
    texto(nuevoValor) {
      if (nuevoValor.length > 3) {
        this.mensaje = 'Listo para buscar';
      } else {
        this.mensaje = '';
        this.usuarios = [];
      }
    }
  },

  methods: {
    async buscarUsuario() {
      const resp = await consumirApiFacade();
      const u = resp.results[0];

      this.usuarios.push({
        nombre: u.name.first + ' ' + u.name.last,
        email: u.email,
        foto: u.picture.thumbnail
      });
    }
  }
};
</script>
<style> 

</style>