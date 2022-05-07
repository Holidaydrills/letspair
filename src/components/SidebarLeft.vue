<template>
  <div>
    Tasks
    <div
      class="person-area"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <pairing-task v-for="task in tasks" v-bind:task="task" :key="task.id" />
    </div>
  </div>
  <div>
    Users
    <div
      class="person-area"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <pairing-user v-for="user in users" v-bind:user="user" :key="user.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "@/store";
import { computed } from "vue";

export default defineComponent({
  components: { PairingTask, PairingUser },
  setup() {
    const store = useStore();
    const onDrop = (e: any) => {
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
    return {
      tasks: computed(() => store.getters.openTasks),
      users: computed(() => store.getters.availableUsers),
      onDrop,
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
