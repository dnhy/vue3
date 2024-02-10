<template>
  <div>接收到的params参数：{{ params.id }}</div>
  <div>接收到的query参数:{{ query.guid }}</div>
  <hr />
  <div>props</div>
  <div>a:{{ a }}</div>
  <div>b:{{ b }}</div>
  <div>id:{{ id }}</div>
  <div>guid:{{ guid }}</div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const params = route.params;
const query = route.query;

// 给路由组件定义props
defineProps(["a", "b", "id", "guid"]);
</script>
