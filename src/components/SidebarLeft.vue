<template>
  <div>
    Tasks
    <div
      ref="taskList"
      id="taskArea"
      class="person-area"
      @drop="onDrop"
      @dragover="onDragOverTaskArea"
      @dragenter.prevent
    >
      <PairingTask
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @startDragTask="onStartDragTask"
        source-drag-area="sidebar"
        ref="taskListItems"
      />
    </div>
  </div>
  <div>
    Users
    <div
      id="personArea"
      class="person-area"
      @drop="onDrop($event)"
      @dragover="onDragOverPersonArea"
      @dragenter.prevent
    >
      <PairingUser v-for="user in users" v-bind:user="user" :key="user.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/runtime-core";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import Test from "./Test.vue";
import { useStore } from "@/store";
import { computed } from "vue";
import { Task } from "@/models/Task";

export default defineComponent({
  components: { PairingTask, PairingUser },
  setup() {
    const taskList = ref<HTMLElement>();
    //https://github.com/vuejs/core/issues/5447
    const taskListItems = ref([]);

    const store = useStore();

    const onDragOverPersonArea = (e: any) => {
      preventDefault(e);
    };

    const onDragEnterPersonArea = (e: any) => {
      preventDefault(e);
    };
    const onDragOverTaskArea = (e: any) => {
      preventDefault(e);
      const draggedDOMElement = e.view.document.querySelector(".dragged-item");
      const div = document.createElement("div");
      div.appendChild(draggedDOMElement);
      if (taskList.value && taskListItems.value) {
        // taskList.value.appendChild(draggedDOMElement);
        taskList.value.insertBefore(draggedDOMElement, taskListItems.value[2]);
      }
    };
    const onDragEnterTaskArea = (e: any) => {
      preventDefault(e);
    };

    const preventDefault = (e: any) => {
      const element = e.target;
      const dataTransferType = e.dataTransfer.types[0];
      console.log(
        `elementId: ${element.id} & closestPerson: ${element.closest(
          "#personArea"
        )} & dataTransferType: ${dataTransferType}`
      );
      if (
        ((element.id === "personArea" || element.closest("#personArea")) &&
          dataTransferType === "user") ||
        ((element.id === "taskArea" || element.closest("#taskArea")) &&
          dataTransferType.includes("task"))
      ) {
        e.preventDefault();
      }
    };
    const onDrop = (e: any) => {
      const draggedDOMElement = e.view.document.querySelector(".dragged-item");
      console.log(
        `SIDEBAR: Source drag area ${draggedDOMElement.dataset.sourceDragArea}`
      );
      if (draggedDOMElement.dataset.sourceDragArea !== "sidebar") {
        draggedDOMElement.remove();
      }
      const taskAsJson = e.dataTransfer.getData("task");
      if (taskAsJson) {
        const droppedTask = JSON.parse(taskAsJson);
        store.dispatch("removeTaskFromLane", droppedTask);
        console.log(`Dropped task ${JSON.stringify(droppedTask)}`);
      } else {
        const userAsJson = e.dataTransfer.getData("user");
        const droppedUser = JSON.parse(userAsJson);
        store.dispatch("removeUserFromLane", droppedUser);
        console.log(`Dropped user ${JSON.stringify(droppedUser)}`);
      }
    };
    const onStartDragTask = (task: Task) => {
      console.log("Start drag task");
      console.log(`TaskAsJSON: ${JSON.stringify(task)}`);
    };
    return {
      tasks: computed(() => store.getters.openTasks),
      users: computed(() => store.getters.availableUsers),
      onDragOverPersonArea,
      onDragEnterPersonArea,
      onDragOverTaskArea,
      onDragEnterTaskArea,
      onDrop,
      onStartDragTask,
      taskList,
      taskListItems,
    };
  },
});
</script>

<style lang="scss">
.person-area {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 50px;
}
</style>
