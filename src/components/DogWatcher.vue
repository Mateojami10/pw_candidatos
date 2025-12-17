<template>
  <div>
    <h2>Buscador de Perros</h2>

    <input
      type="text"
      v-model="palabra"
      placeholder="Escribe algo..."
    />

    <p>{{ mensaje }}</p>

    <img v-if="imagen" :src="imagen" alt="perro" width="300">
    <div>
      <button @click="buscarVariosPerros">Buscar Varios Perros</button>
      <div v-for="(img, index) in imagenes" :key="index" style="margin-top: 10px;">
        <img :src="img" alt="perro" width="200" />
        </div>
     </div>

  </div>
</template>

<script>
import { consumirApiFacade } from '@/clients/RandomDogClient';

export default {
  data() {
    return {
      palabra: '',
      mensaje: '',
      imagen: null,
      imagenes: []
    };
  },

  watch: {
    palabra(newVal) {
      if (newVal.length > 3) {
        this.mensaje = 'Buscando...';
        this.buscarPerro();
      } else {
        this.mensaje = '';
        this.imagen = null;
      }
    }
  },

  methods: {
    // metodo que consume la api
    async buscarPerro() {
        const resp = await consumirApiFacade();
        this.imagen = resp.message; 
        this.mensaje = '¡Perro encontrado!';
    },
    //metodo que usa hacer this.imagenes.push(...) Consume la API de perros Guarda la imagen en un arreglo y Mostrar todas las imágenes con v-for
    async buscarVariosPerros() {
        const resp = await consumirApiFacade();
        this.imagenes.push(resp.message); 
    }
    
  }
};
</script>
<style>

</style>
