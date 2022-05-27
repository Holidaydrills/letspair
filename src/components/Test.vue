<script setup>
import { ref, onMounted } from "vue";

const list = ref([1, 2, 3]);

const itemRefs = ref([]);

onMounted(() => {
  alert(itemRefs.value.map((i) => i.textContent));
});
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
