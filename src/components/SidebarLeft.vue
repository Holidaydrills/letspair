<template>
  <div>Tasks</div>
  <div>
    Persons
    <div
      class="person-area"
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <!-- <div v-for="person in persons" :key="person.id"> -->
      <Person
        v-for="person in people"
        v-bind:person="person"
        :key="person.id"
      ></Person>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Person from "./Person.vue";

export default defineComponent({
  components: { Person },
  data() {
    return {
      people: [
        {
          id: "Person1",
          name: "Peer",
        },
        {
          id: "Person2",
          name: "Luka",
        },
        {
          id: "Person3",
          name: "Ronaldo",
        },
      ],
    };
  },
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
