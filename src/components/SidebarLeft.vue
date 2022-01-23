<template>
  <div>
    Tasks
    <div class="person-area">
      <pairing-task v-for="task in tasks" v-bind:task="task" :key="task.id" />
    </div>
  </div>
  <div>
    Users
    <div
      class="person-area"
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <pairing-user v-for="user in users" v-bind:user="user" :key="user.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import PairingUser from "./PairingUser.vue";
import PairingTask from "./PairingTask.vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { computed } from "vue";

export default defineComponent({
  components: { PairingTask, PairingUser },
  setup() {
    const store = useStore(key);
    return {
      tasks: computed(() => store.state.tasks),
      users: computed(() => store.state.users),
    };
  },
  // methods: {
  //   onDrop(evt: any, person: any) {
  //     // const itemID = evt.dataTransfer.getData("itemID");
  //     // this.lane.people.push("New Person");
  //     alert(`Dropped this`);
  //   },
  // },
});
</script>

<style lang="scss">
.person-area {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 50px;
}
</style>
