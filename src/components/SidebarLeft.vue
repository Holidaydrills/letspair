<template>
  <div>Tasks</div>
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

export default defineComponent({
  components: { Person },
  props: ["users"],
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
