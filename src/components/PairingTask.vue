<template>
  <div class="task-wrapper">
    <div class="task" draggable="true" @dragstart="startDrag($event, task)">
      {{ task.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["task"],
  setup() {
    const startDrag = (e: any, task: any) => {
      console.log(
        JSON.stringify(
          `Start drag data: Event: ${JSON.stringify(e)}; item: ${JSON.stringify(
            task
          )}`
        )
      );
      e.dataTransfer.setData("task", JSON.stringify(task));
    };
    return {
      startDrag,
    };
  },
});
</script>

<style lang="scss">
.task-wrapper {
  width: 100%;
  .task {
    height: 2em;
    min-width: 100px;
    display: inline-block;
    padding: 5px;
    margin: 2px;
    background-color: #bdd5ea;
  }
}
</style>
