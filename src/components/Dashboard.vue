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
import { getAllUsers } from "@/services/UserService";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  data() {
    return {
      users: new Array<User>(),
    };
  },
  methods: {
    getAllUsers() {
      //this.$store.commit("getAllUsers");
      // this.users = this.$store.state.users;
      // console.log(this.$store.state.users);
      this.users = getAllUsers();
      console.log(this.users);
    },
  },
  mounted() {
    this.getAllUsers();
  },
});
</script>
