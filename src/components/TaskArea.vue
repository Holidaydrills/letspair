<template>
  <div class="task-area">
    <div class="lane" v-for="lane in lanes" v-bind:key="lane.id">
      {{ lane.id }}
    </div>
    <button>New Lane</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TaskArea extends Vue {
  private lanes = [
    {
      id: "1",
      people: ["Dev 1", "Dev 2"],
      tasks: ["Task 1", "Task 2"],
    },
    {
      id: "2",
      people: ["Dev 3", "Dev 4"],
      tasks: ["Task 3", "Task 4"],
    },
  ];
}
</script>

<style lang="scss">
.task-area {
  background-color: purple;
  width: 100%;
  height: 100%;
}

.lane {
  height: 7em;
  padding: 5px;
  border-bottom-style: solid;
  border-width: 1px;
}
</style>
