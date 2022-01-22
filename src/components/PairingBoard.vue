<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <sidebar-left :users="users" />
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

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  setup() {
    const store = useStore(key);
    const users = ref(new Array<User>());
    const getAllUsers = () => {
      store.commit("getAllUsers");
      users.value = store.state.users;
    };
    onMounted(getAllUsers);
    return {
      users,
      getAllUsers,
    };
  },
});
</script>
