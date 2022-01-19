<template>
  <div class="task" draggable="true" @dragstart="startDrag($event)">
    {{ task.description }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["task"],
  methods: {
    startDrag(evt: any, item: any) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", "New Task");
    },
    onDrop(evt: any, task: any) {
      alert(`Dropped ${this.task.description}`);
    },
  },
});
</script>

<style lang="scss">
.person {
  height: 2em;
  min-width: 100px;
  display: inline-block;
  padding: 5px;
  margin: 2px;
  background-color: #bdd5ea;
}
</style>
