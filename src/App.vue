<template>
  <div>
    <!--<BuscarCandidatoView />-->
    <!--<DogWatcherView />-->
    <BuscarUsuariosView />
  </div>
  
</template>

<script>    
import BuscarCandidatoView from '../src/views/BuscarCandidatoView.vue';
import DogWatcherView from './views/DogWatcherView.vue';
import BuscarUsuariosView from './views/BuscarUsuariosView.vue';
export default {
  components: {
    /*BuscarCandidatoView,*/
    /*DogWatcherView,*/
    BuscarUsuariosView
  }
}
</script>

<style>

</style>