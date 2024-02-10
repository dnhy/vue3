<template>
  <div>level 2</div>
  <button @click="updateLocation">{{ location }}</button>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from "vue";
import { myInjectionkeys } from "@/assets/common/js/keys";

const message = inject("mesage") as Ref<Number>;

console.log("message :", message.value);

// 如果没有祖先组件提供 "message"
// `value` 会是 "这是默认值"
const defaultMessage = inject("message", "这是默认值");
console.log("defaultMessage :", defaultMessage);

//TODO 通过工厂函数创建默认值
// const value = inject('key', () => new ExpensiveClass(), true)

//接收注入的值、更改方法
console.log(inject("location"));

const { location, updateLocation } = inject("location") as {
  location: string;
  updateLocation: () => {};
};

var readonlycount = inject("readonlycount") as Ref<Number>;
(readonlycount.value as number)++;
console.log("readonlycount.value  :", readonlycount.value);

// const injected = inject(myInjectionkeys);// 类型：string | undefined

// 加注入的默认值
const injected = inject(myInjectionkeys, "bar"); // 类型：string
console.log("injected :", injected);
</script>
