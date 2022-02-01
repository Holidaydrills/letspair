<template>
  <div
    class="lane-persons"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div>
      <p>{{ lane.id }}</p>
      <pairing-task
        v-for="task in lane.tasks"
        v-bind:task="task"
        :key="task.id"
      />
    </div>
    <div>
      <p>{{ lane.id }}</p>
      <pairing-user
        v-for="user in lane.users"
        v-bind:user="user"
        :key="user.id"
      />
    </div>
  </div>
  <button @click="$emit('removeLane', laneId)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "@/store";
import { Task } from "@/models/Task";

export default defineComponent({
  components: { PairingUser, PairingTask },
  props: ["lane"],
  setup(props) {
    const store = useStore();
    const onDrop = (evt: any, item: any) => {
      const taskAsJson = evt.dataTransfer.getData("task");
      if (taskAsJson) {
        store.dispatch("addTaskToLane", JSON.parse(taskAsJson));
        console.log(`Dropped item description ${taskAsJson}`);
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
    startDrag(evt: any, item: any) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", "New Person");
    },
  },
});
</script>

<style lang="scss">
.lane {
  height: 7em;
  padding: 5px;
  border-bottom-style: solid;
  border-width: 1px;
}

.lane-persons {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
