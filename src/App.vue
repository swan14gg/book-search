<template>
  <RootContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RootContainer from './components/RootContainer.vue';


export default defineComponent({
  name: 'App',
  components: {
    RootContainer,
  }
});
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
