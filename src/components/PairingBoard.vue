<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <sidebar-left />
    </div>
    <div class="content-area">
      <task-area />
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
import { onMounted } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  setup() {
    const store = useStore();
    const getAllUsers = async () => {
      await store.dispatch("getAllUsers");
    };
    const getAllTasks = async () => {
      await store.dispatch("getAllTasks");
    };
    onMounted(() => {
      getAllUsers();
      getAllTasks();
    });
    return {
      getAllUsers,
      getAllTasks,
    };
  },
});
</script>
