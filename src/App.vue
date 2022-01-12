<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <SidebarLeft />
    </div>
    <div class="content-area">
      <TaskArea />
    </div>
    <div class="right-sidebar">
      <p>Test</p>
    </div>
    <div class="footer">
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TaskArea from "./components/TaskArea.vue";
import SidebarLeft from "./components/SidebarLeft.vue";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
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
