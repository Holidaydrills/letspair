<template>
  <div class="task-area">
    <div v-for="lane in lanes" :key="lane.id">
      <lane :lane="lane" @remove-lane="removeLane" />
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
          id: uuidv4(),
          users: [
            {
              id: uuidv4(),
              name: "Randy",
            },
            {
              id: uuidv4(),
              name: "Michael",
            },
          ],
          tasks: ["Task 1", "Task 2"],
        },
        {
          id: uuidv4(),
          users: [
            {
              id: uuidv4(),
              name: "Todd",
            },
            {
              id: uuidv4(),
              name: "Brono",
            },
          ],
          tasks: ["Task 3", "Task 4"],
        },
      ],
    };
  },
  methods: {
    addNewLane() {
      this.lanes.push({
        id: uuidv4(),
        users: [],
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
