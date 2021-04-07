<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <p>Test</p>
    </div>
    <div class="content-area">
      <TaskArea/>
    </div>
    <div class="right-sidebar">
      <p>Test</p>
      <div class="person-area">
        <!-- <div
          class="drag-element"
          draggable="true"
          @dragstart="startDrag($event)"
        >
          Draggable Element
        </div> -->
      </div>
    </div>
    <div class="footer">
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TaskArea from "./components/TaskArea.vue";

export default defineComponent({
  components: { TaskArea },
  methods: {
    startDrag(event: Event) {
      console.log(`Starting to drag: ${JSON.stringify(event)}`);
    },
  },
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
.drag-element {
  background-color: #3498db;
  margin-bottom: 10px;
  padding: 5px;
}
.person-area {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 100px;
}
</style>
