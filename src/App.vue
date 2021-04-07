<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <p>Test</p>
    </div>
    <div class="content-area">
      <TaskArea />
    </div>
    <div class="right-sidebar">
      <p>Test</p>
      <div
        class="person-area"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div v-for="person in persons" :key="person.id">
          <Person></Person>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TaskArea from "./components/TaskArea.vue";
import Person from "./components/Person.vue";

export default defineComponent({
  components: { TaskArea, Person },
  data() {
    return {
      persons: [
        {
          id: "Person1",
        },
        {
          id: "Person2",
        },
        {
          id: "Person3",
        },
      ],
    };
  },
  methods: {
    startDrag(event: Event) {
      console.log(`Starting to drag: ${JSON.stringify(event)}`);
    },
    onDrop(evt: any, person: any) {
      // const itemID = evt.dataTransfer.getData("itemID");
      // this.lane.people.push("New Person");
      alert(`Dropped this`);
    },
  },
});
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
@import "./sass/main.scss";
.drag-element {
  background-color: #3498db;
  margin-bottom: 10px;
  padding: 5px;
}
.person-area {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 100px;
}
</style>
