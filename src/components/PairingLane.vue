<template>
  <div class="lane" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
    <div class="lane-section">
      <TransitionGroup name="list">
        <div v-for="user in users" :user="user" :key="user.id">
          <pairing-user :user="user" />
        </div>
      </TransitionGroup>
    </div>
    <div class="lane-section">
      <pairing-task v-for="task in tasks" v-bind:task="task" :key="task.id" />
    </div>
  </div>
  <button @click="$emit('removeLane', laneId)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "@/store";
import { computed } from "vue";

export default defineComponent({
  components: { PairingUser, PairingTask },
  props: ["lane"],
  setup(props) {
    const store = useStore();
    const onDrop = (e: any) => {
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
