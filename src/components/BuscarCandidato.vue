<template>
    <div class="buscar-container">
        <button @click="buscarCandidato">Buscar Candidato</button>

    </div>
    <div>
    <CandidatosTabla
        v-if="foto"
        :titulo="titulo"
        :nombre="nombre"
        :apellido="apellido"
        :email="email"
        :telefono="telefono"
        :foto="foto"
    />
    </div>

</template>

<script>
import { consumirApiFacade } from '@/clients/RandomUserClient';
import CandidatosTabla from '@/components/CandidatosTabla.vue';
export default {
    components: {
        CandidatosTabla
    },
    data() {
        return {
            candidatos: []
        }
    },
    methods: {
        async buscarCandidato() {
            const resp = await consumirApiFacade();
            const candidato = resp.results[0];

            this.titulo = candidato.name.title;
            this.nombre = candidato.name.first;
            this.apellido = candidato.name.last;
            this.email = candidato.email;
            this.telefono = candidato.phone;
            this.foto = candidato.picture.large;
        }

    }
}
</script>

<style>

</style>