<template>
  <div class="user-wrapper">
    <div class="person" draggable="true" @dragstart="startDrag($event)">
      {{ user.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["user", "lane"],
  methods: {
    startDrag(evt: any, item: any) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", "New Person");
    },
    onDrop(evt: any, person: any) {
      alert(`Dropped ${this.lane.people}`);
    },
  },
});
</script>

<style lang="scss">
.user-wrapper {
  width: 100%;
  .person {
    height: 2em;
    min-width: 100px;
    display: inline-block;
    padding: 5px;
    margin: 2px;
    background-color: #bdd5ea;
  }
}
</style>
