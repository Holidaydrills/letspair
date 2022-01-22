<template>
  <div
    class="lane-persons"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div>
      <p>{{ laneId }}</p>
      <task v-for="task in tasks" v-bind:task="task" :key="task.id"></task>
    </div>
    <div>
      <p>{{ laneId }}</p>
      <person v-for="user in users" v-bind:user="user" :key="user.id"></person>
    </div>
  </div>
  <button @click="$emit('removeLane', laneId)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Person from "./Person.vue";
import Task from "./Task.vue";

export default defineComponent({
  components: { Person, Task },
  emits: ["removeLane"],
  data() {
    return {
      laneId: "123",
    };
  },
  props: ["users", "tasks"],
  methods: {
    startDrag(evt: any, item: any) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", "New Person");
    },
    onDrop(evt: any, person: any) {
      // const itemID = evt.dataTransfer.getData("itemID");
      // this.lane.people.push("New Person");
      alert(`Dropped ${this.laneId}`);
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
