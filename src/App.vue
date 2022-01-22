<template>
  <div id="app">
    <pairing-board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import PairingBoard from "@/components/PairingBoard.vue";

export default defineComponent({
  components: { PairingBoard },
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
