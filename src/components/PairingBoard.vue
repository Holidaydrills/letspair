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
      <TestComponent ref="itemRef" />
      <ul>
        <li v-for="item in list" ref="itemRefs" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="footer">
      <p>Test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import TaskArea from "./TaskArea.vue";
import SidebarLeft from "./SidebarLeft.vue";
import TestComponent from "./TestComponent.vue";
import { onMounted } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  components: { TaskArea, SidebarLeft },
  setup() {
    const list = ref([1, 2, 3]);
    const itemRefs = ref([]);
    const itemRef = ref<HTMLElement>();
    onMounted(() => {
      if (itemRef) {
        console.log(itemRef.value!.getBoundingClientRect());
      }
      itemRefs.value.forEach((item: HTMLElement) =>
        console.log(item.getBoundingClientRect())
      );
    });

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
      list,
      itemRefs,
      itemRef,
    };
  },
});
</script>
