<template>
  <div class="tabla-candidatos">
        <h2>Tabla de Candidatos</h2>
        <img :src="foto" alt="Foto del candidato">
        <h3>{{ titulo }} {{ nombre }} {{ apellido }}</h3>
        <p>{{ email }}</p>
        <p>{{ telefono }}</p>
  </div>
</template>

<script>
export default {
    props: {
        titulo: String,
        nombre: String,
        apellido: String,
        email: String,
        telefono: String,
        foto: String
        
    }

}
</script>

<style scoped>
.tabla-candidatos {
  border: 1px solid #460606;
  padding: 16px;
  margin-top: 16px;
}

</style>