<template>
  <div class="task-area">
    <div v-for="lane in lanes" :key="lane.id">
      <Lane :lane="lane" @remove-lane="removeLane" />
    </div>
    <button @click="addNewLane">{{ $t("add-lane-button") }}</button>
  </div>
</template>

<script lang="ts">
import Lane from "./Lane.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Lane },
  data() {
    return {
      lanes: [
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
      ],
    };
  },
  methods: {
    addNewLane() {
      this.lanes.push({
        id: uuidv4(),
        people: ["Dev 5", "Dev 6"],
        tasks: ["Task 5", "Task 6"],
      });
    },
    removeLane(id: string) {
      this.lanes = this.lanes.filter((lane) => lane.id !== id);
    },
  },
});
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
</script>

<style lang="scss">
.task-area {
  background-color: purple;
  width: 100%;
  height: 100%;
}
</style>
