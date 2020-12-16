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
@import "bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
