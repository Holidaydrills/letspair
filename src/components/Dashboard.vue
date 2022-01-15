<template>
  <div class="container">
    <div class="header">
      <p>Test</p>
    </div>
    <div class="left-sidebar">
      <sidebar-left :people="users" />
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
    getAllUsers() {
      this.users = getAllUsers();
      console.log(this.users);
    },
    testStore() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
  mounted() {
    this.getAllUsers();
    this.testStore();
  },
});
</script>
