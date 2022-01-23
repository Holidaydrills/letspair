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
import { User } from "@/models/User";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { key } from "@/store";
import { Task } from "@/models/Task";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  setup() {
    const store = useStore(key);
    const users = ref(new Array<User>());
    const tasks = ref(new Array<Task>());
    const getAllUsers = () => {
      store.dispatch("getAllUsers");
      users.value = store.state.users;
    };
    const getAllTasks = () => {
      store.dispatch("getAllTasks");
      tasks.value = store.state.tasks;
      console.log(`tasks.value: ${JSON.stringify(tasks.value)}`);
    };
    onMounted(() => {
      getAllUsers();
      getAllTasks();
    });
    return {
      users,
      tasks,
      getAllUsers,
      getAllTasks,
    };
  },
});
</script>
