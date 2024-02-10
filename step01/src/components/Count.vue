<template>
  <div>{{ name }}</div>
  <div>{{ sum }}</div>
  <div>{{ biggerSum }}</div>
  <button @click="addSum">+</button>
</template>

<script setup lang="ts" name="Count">
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useCountStore } from "@/store/count";

const countstore = useCountStore();
console.log("countstore :", countstore);

let { name, sum, biggerSum } = storeToRefs(countstore);
//toRefs会把所有属性全部变成ref
// console.log("storeToRefs(countstore) :", storeToRefs(countstore));
// console.log("toRefs(countstore) :", toRefs(countstore));

//一般使用第一种拿数据
console.log(countstore.sum);
console.log(countstore.$state.sum);

//修改数据
function addSum() {
  //1.直接拿到store中的数据修改
  // countstore.sum++;
  //2.批量修改
  countstore.$patch({
    sum: countstore.sum + 1,
    name: "qqqqqq",
  });
  //3.action修改
  // countstore.increament();
}
</script>
