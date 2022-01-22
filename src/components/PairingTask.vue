<template>
  <div class="task" draggable="true" @dragstart="startDrag($event)">
    {{ task.description }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["task"],
});
</script>

<style lang="scss">
.task {
  height: 2em;
  min-width: 100px;
  display: inline-block;
  padding: 5px;
  margin: 2px;
  background-color: #bdd5ea;
}
</style>
