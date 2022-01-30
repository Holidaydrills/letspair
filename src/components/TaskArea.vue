<template>
  <div class="task-area">
    <div v-for="lane in lanes" :key="lane.id">
      <pairing-lane :lane="lane" />
    </div>
  </div>
</template>

<script lang="ts">
import PairingLane from "./PairingLane.vue";
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "vue";

export default defineComponent({
  components: { PairingLane },
  setup() {
    const store = useStore();
    return {
      lanes: computed(() => store.state.lanes),
    };
  },
});
// function uuidv4() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     var r = (Math.random() * 16) | 0,
//       v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }
</script>

<style lang="scss">
.task-area {
  background-color: purple;
  width: 100%;
  height: 100%;
}
</style>
