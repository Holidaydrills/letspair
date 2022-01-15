<template>
  <div class="person" draggable="true" @dragstart="startDrag($event)">
    {{ user.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  // props: {
  //   lane: {
  //     type: Object,
  //     required: true,
  //   },
  //   person: Object,
  // },
  props: ["user", "lane"],
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
.person {
  height: 2em;
  min-width: 100px;
  display: inline-block;
  padding: 5px;
  margin: 2px;
  background-color: #bdd5ea;
}
</style>
