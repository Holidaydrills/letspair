<template>
  <div class="task-area">
    <div v-for="lane in lanes" :key="lane.id">
      <pairing-lane :lane="lane" />
    </div>
    <button @click="addNewLane">New Lane</button>
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
    const addNewLane = () => {
      store.dispatch("addNewLane");
    };
    return {
      lanes: computed(() => store.state.lanes),
      addNewLane,
    };
  },
});
</script>

<style lang="scss">
.task-area {
  background-color: purple;
  width: 100%;
  height: 100%;
}
</style>
