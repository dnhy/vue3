<template>
  <button @click="pushWithQuery()">pushWithQuery</button>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

function pushWithQuery() {
  //params需要有路由的name属性才能生效
  router.push({
    name: "RouterTestTarget",
    path: "./RouterTestTarget/:id",
    query: {
      guid: "12346455353",
    },
    params: {
      id: "XXXX",
    },
  });
}
</script>
