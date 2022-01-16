<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  components: { Dashboard },
});
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
@import "./sass/main.scss";
</style>
