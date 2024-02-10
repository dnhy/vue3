<template>
  <ul v-for="item in talkList">
    <li>{{ item.name }}</li>
  </ul>
  <button @click="addList">++</button>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import { usetalkeStore } from "@/store/talk";
import { storeToRefs } from "pinia";

var talkeStore = usetalkeStore();
console.log("talkeStore :", talkeStore);

//使用订阅来实现数据持久化
talkeStore.$subscribe((mutate: any, state: any) => {
  console.log("mutate :", mutate);
  console.log("state :", state);

  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});

const { talkList } = storeToRefs(talkeStore);
console.log("talkList :", talkList);

function addList() {
  talkeStore.getAtalk();
}
</script>
