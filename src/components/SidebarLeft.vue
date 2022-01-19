<template>
  <div>Tasks</div>
  <task v-for="task in tasks" v-bind:task="task" :key="task.id"></task>
  <div>
    Users
    <div
      class="person-area"
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <person v-for="user in users" v-bind:user="user" :key="user.id"></person>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Person from "./Person.vue";
import Task from "./Task.vue";

export default defineComponent({
  components: { Task, Person },
  props: ["tasks", "users"],
  methods: {
    onDrop(evt: any, person: any) {
      // const itemID = evt.dataTransfer.getData("itemID");
      // this.lane.people.push("New Person");
      alert(`Dropped this`);
    },
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
