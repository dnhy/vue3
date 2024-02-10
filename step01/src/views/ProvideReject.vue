<template>
  <OneLevel />
</template>

<script setup lang="ts">
import { provide, ref, readonly } from "vue";
import OneLevel from "@/components/OneLevel.vue";
import { myInjectionkeys } from "@/assets/common/js/keys";

const value = ref(123);
const location = ref("North Pole");
const readonlycount = ref(1111);

function updateLocation() {
  location.value = "new value";
}

provide("mesage", value);

//在供给方组件内声明并提供一个更改数据的方法函数
provide("location", { location, updateLocation });

// 确保提供的数据不能被注入方的组件更改
provide("readonlycount", readonly(readonlycount));

//使用Symbol作为注入名
provide(myInjectionkeys, '1122121');
</script>
