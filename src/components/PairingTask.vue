<template>
  <div class="task" draggable="true" @dragstart="startDrag($event, task)">
    {{ task.description }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["task"],
  setup() {
    const startDrag = (evt: any, task: any) => {
      console.log(
        JSON.stringify(
          `Start drag data: Event: ${JSON.stringify(
            evt
          )}; item: ${JSON.stringify(task)}`
        )
      );
      evt.dataTransfer.setData("itemID", task.description);
    };
    return {
      startDrag,
    };
  },
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
