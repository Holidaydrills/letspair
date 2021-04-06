<template>
  <div
    class="drop-zone"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div>
      <p>{{ lane.id }}</p>
      <div v-for="person in lane.people" :key="person">
        {{ person }}
      </div>
    </div>
  </div>
  <button @click="$emit('removeLane', lane.id)">Remove lane</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  emits: ["removeLane"],
  props: {
    lane: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startDrag(evt: any, item: any) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", "New Person");
    },
    onDrop(evt: any, person: any) {
      // const itemID = evt.dataTransfer.getData("itemID");
      // this.lane.people.push("New Person");
      alert(`Dropped ${this.lane.people}`);
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

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
