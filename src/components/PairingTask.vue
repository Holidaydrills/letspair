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

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(["removeLane", "startDragTask"]);
const props = defineProps(["task"]);
const isDragged = ref(false);
function startDrag(e: any, task: any) {
  isDragged.value = true;
  e.dataTransfer.setData("task", JSON.stringify(task));
  emit("startDragTask");
}
function dragEnd() {
  isDragged.value = false;
}
</script>
