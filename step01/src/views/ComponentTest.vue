<template>
  <div>
    <!-- v-model 的参数 -->
    <Home
      title="name111"
      @submit="submit"
      v-model="mdoelCount"
      v-model:titleval="title"
      v-model:otherval="other"
    ></Home>
    <hr />
    <!-- v-model 的修饰符 -->
    This input capitalizes everything you enter:
    <AutoFirstWordCapital v-model.capitalize="keyword" />
    <hr />
    <!-- $attrs -->
    <CompAttrs class="testClass" style="{width: 100%;}" @click="openAttr" foo-bar="1111"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref, watch, watchEffect } from "vue";
import Home from "@/components/Home.vue";
import AutoFirstWordCapital from "@/components/AutoFirstWordCapital.vue";
import CompAttrs from "@/components/CompAttrs.vue";

const mdoelCount = ref(0);
const title = ref("v-model argument example");
const other = ref("111");
const keyword = ref("");

function submit(id: number, name: string) {
  console.log("submit", id, name);
}

function openAttr() {
    alert(1111)
}

watch(mdoelCount, (val) => {
  console.log("mdoelCount", val);
});

watchEffect(() => {
  console.log("title", title.value);
  console.log("other", other.value);
  console.log("keyword", keyword.value);
});
</script>
