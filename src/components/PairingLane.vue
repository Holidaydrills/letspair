<template>
  <div
    class="lane"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="lane-section">
      <pairing-user
        v-for="user in lane.users"
        v-bind:user="user"
        :key="user.id"
      />
    </div>
    <div class="lane-section">
      <pairing-task
        v-for="task in lane.tasks"
        v-bind:task="task"
        :key="task.id"
      />
    </div>
  </div>
  <button @click="$emit('removeLane', laneId)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "@/store";

export default defineComponent({
  components: { PairingUser, PairingTask },
  props: ["lane"],
  setup(props) {
    const store = useStore();
    const onDrop = (e: any, item: any) => {
      const taskAsJson = e.dataTransfer.getData("task");
      if (taskAsJson) {
        const droppedTask = JSON.parse(taskAsJson);
        droppedTask.laneId = props.lane.id;
        store.dispatch("addTaskToLane", droppedTask);
        console.log(
          `Dropped task ${JSON.stringify(droppedTask)} to lane ${props.lane.id}`
        );
      } else {
        const userAsJson = e.dataTransfer.getData("user");
        store.dispatch("addUserToLane", JSON.parse(userAsJson));
        console.log(`Dropped user description ${userAsJson}`);
      }
    };
    return {
      onDrop,
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
