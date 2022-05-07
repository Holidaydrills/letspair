<template>
  <div>
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
