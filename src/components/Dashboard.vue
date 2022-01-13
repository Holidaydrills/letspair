<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <SidebarLeft />
    </div>
    <div class="content-area">
      <TaskArea />
    </div>
    <div class="right-sidebar">
      <p>Test</p>
    </div>
    <div class="footer">
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TaskArea from "./TaskArea.vue";
import SidebarLeft from "./SidebarLeft.vue";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
});
</script>
