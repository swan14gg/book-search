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
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap');
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

$family-sans-serif: 'M PLUS Rounded 1c', sans-serif;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import "../node_modules/bulma/bulma.sass";
</style>
