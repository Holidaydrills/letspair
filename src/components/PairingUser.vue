<template>
  <div class="user-wrapper">
    <div class="person" draggable="true" @dragstart="startDrag($event, user)">
      {{ user.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["removeLane"],
  props: ["user"],
  setup() {
    const startDrag = (e: any, user: any) => {
      console.log(
        JSON.stringify(
          `Start drag data: Event: ${JSON.stringify(e)}; item: ${JSON.stringify(
            user
          )}`
        )
      );
      e.dataTransfer.setData("user", JSON.stringify(user));
    };
    return {
      startDrag,
    };
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
