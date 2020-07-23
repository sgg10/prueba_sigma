<template>
  <div id="app">
    <Encabezado />
    <Central />
  </div>
</template>

<script>
import Encabezado from './components/Encabezado.vue'
import Central from './components/Central.vue'

export default {
  name: 'App',
  components: { Encabezado, Central }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
