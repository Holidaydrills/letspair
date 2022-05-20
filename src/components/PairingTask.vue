<template>
  <div>
    <div
      class="task"
      :class="{ 'dragged-item': isDragged }"
      draggable="true"
      @dragstart="startDrag($event, task)"
      @dragend="dragEnd"
    >
      {{ task.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["task"],
  setup() {
    const isDragged = ref(false);
    const startDrag = (e: any, task: any) => {
      isDragged.value = true;
      console.log(`isDragged: ${isDragged.value}`);
      e.dataTransfer.setData("task", JSON.stringify(task));
    };
    const dragEnd = () => {
      isDragged.value = false;
    };
    return {
      startDrag,
      dragEnd,
      isDragged,
    };
  },
});
</script>
