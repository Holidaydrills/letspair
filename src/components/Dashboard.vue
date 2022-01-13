<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <SidebarLeft :people="users" />
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
import { getAllUsers } from "../services/UserService";
import { Person } from "../models/Person";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  data() {
    return {
      users: new Array<Person>(),
      //   users: [
      //     new Person("123", "Harry"),
      //     new Person("456", "Thomas"),
      //     new Person("789", "Luka"),
      //   ],
    };
  },
  methods: {
    getAllUsers: function () {
      this.users = getAllUsers();
      console.log(this.users);
    },
  },
  mounted() {
    this.getAllUsers();
  },
});
</script>
