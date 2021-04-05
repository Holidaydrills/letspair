<template>
  <div>
    <p>{{ id }}</p>
  </div>
  <button @click="$emit('removeLane', id)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: {
    id: {
      type: String,
      required: true,
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
</style>
