<template>
  <div>
    <div class="user" draggable="true" @dragstart="startDrag($event, user)">
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
