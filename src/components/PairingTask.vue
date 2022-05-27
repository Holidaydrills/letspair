<template>
  <div>
    <div
      class="task"
      :class="{ 'dragged-item': isDragged }"
      draggable="true"
      @dragstart="startDrag($event, task)"
      @dragend="dragEnd"
      :data-source-drag-area="sourceDragArea"
      :data-task-id="task.id"
    >
      {{ task.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from "@/models/Task";
import { ref, defineProps, defineEmits, defineExpose } from "vue";

const emit = defineEmits(["removeLane", "startDragTask"]);
const props = defineProps(["task", "sourceDragArea"]);
const isDragged = ref(false);
function startDrag(e: any, task: Task) {
  console.log(`PARINGINTASK isDragged = ${JSON.stringify(isDragged)}`);
  isDragged.value = true;
  console.log(`isDragged = ${JSON.stringify(isDragged)}`);
  const taskAsJsonString = JSON.stringify(task);
  const dragEventData = addSourceDragAreaField(taskAsJsonString);
  e.dataTransfer.setData("task", dragEventData);
  console.log(`PARINGINTASK emit startDragTask`);
  emit("startDragTask", task);
}
function addSourceDragAreaField(taskAsJson: string) {
  const task = JSON.parse(taskAsJson);
  task.sourceDragArea = props.sourceDragArea;
  return JSON.stringify(task);
}
function dragEnd() {
  isDragged.value = false;
}
defineExpose({
  isDragged,
});
</script>
