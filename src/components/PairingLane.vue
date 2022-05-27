<template>
  <div
    class="lane"
    @drop="onDrop($event)"
    @dragover="onDragOver"
    @dragenter.prevent
  >
    <div class="lane-section">
      <pairing-user
        v-for="user in users"
        :user="user"
        :key="user.id"
        ref="itemRefs"
      />
    </div>
    <div class="lane-section" ref="taskList">
      <pairing-task
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        :source-drag-area="lane.id"
      />
    </div>
  </div>
  <button @click="$emit('removeLane', laneId)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "@/store";
import { computed } from "vue";

export default defineComponent({
  components: { PairingUser, PairingTask },
  props: ["lane"],
  setup(props) {
    const store = useStore();
    const taskList = ref<HTMLElement>();
    onMounted(() => {
      // Logs: `Headline`
      console.log("MOUNTED");
      console.log(taskList.value);
      if (taskList.value) {
        //userList.value.appendChild("TEST");
      }
    });
    const onDragOver = (e: any) => {
      e.preventDefault();
      const draggedDOMElement = e.view.document.querySelector(".dragged-item");
      const div = document.createElement("div");
      div.appendChild(draggedDOMElement);
      if (taskList.value) {
        taskList.value.appendChild(draggedDOMElement);
      }
      //this.$el.parentNode.appendChild(draggedDOMElement);

      // const sourceDragArea = draggedDOMElement.getAttribute(
      //   "data-source-drag-area"
      // );
      // const draggedTaskId = draggedDOMElement.getAttribute("data-task-id");
      // console.log(
      //   `PairingLane \nsourceDragArea:${sourceDragArea}\ndraggedTaskId=${draggedTaskId}`
      // );
      // const draggedTask = store.getters.taskById(draggedTaskId);

      // console.log(`PairingLane taskAsJSON: ${JSON.stringify(draggedTask)}`);
      // draggedTask.laneId = props.lane.id;
      // store.dispatch("addTaskToLane", draggedTask);
      // console.log(
      //   `Dropped task ${JSON.stringify(draggedTask)} to lane ${props.lane.id}`
      // );
    };

    const onDrop = (e: any) => {
      const taskAsJson = e.dataTransfer.getData("task");
      const draggedDOMElement = e.view.document.querySelector(".dragged-item");
      if (draggedDOMElement.dataset.sourceDragArea !== props.lane.id) {
        draggedDOMElement.remove();
      }

      if (taskAsJson) {
        console.log(`PairingLane taskAsJSON: ${JSON.stringify(taskAsJson)}`);
        const droppedTask = JSON.parse(taskAsJson);
        droppedTask.laneId = props.lane.id;
        store.dispatch("addTaskToLane", droppedTask);
        console.log(
          `Dropped task ${JSON.stringify(droppedTask)} to lane ${props.lane.id}`
        );
      } else {
        const userAsJson = e.dataTransfer.getData("user");
        const droppedUser = JSON.parse(userAsJson);
        droppedUser.laneId = props.lane.id;
        store.dispatch("addUserToLane", droppedUser);
        console.log(
          `Dropped user ${JSON.stringify(droppedUser)} to lane ${props.lane.id}`
        );
      }
    };
    return {
      tasks: computed(() => store.getters.tasksForLaneId(props.lane.id)),
      users: computed(() => store.getters.usersForLaneId(props.lane.id)),
      onDragOver,
      onDrop,
      taskList,
    };
  },
  emits: ["removeLane"],
  data() {
    return {
      laneId: "123",
    };
  },
  methods: {
    startDrag(e: any, item: any) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemID", "New Person");
    },
  },
});
</script>
