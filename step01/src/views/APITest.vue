<template>
  <div>{{ count }}</div>
  <button @click="count++">+</button>
  <div>{{ state.count.a }}</div>
  <button @click="change">change</button>
  <button @click="changeCount">changeCount</button>
  <hr />
  <div>{{ stateReactive.count.a }}</div>
  <button @click="changeReactive">changeReactive</button>
  <button @click="changeReactiveCount">changeReactiveCount</button>

  <hr />

  <div>orgin:{{ origin.count }}</div>
  <div>copy:{{ copy.count }}</div>
  <button @click="changeOrigin">changeOrigin</button>
  <button @changeCopy="changeCopy">changeCopy</button>

  <button @click="changeOrigin">changeOrigin</button>
  <button @changeCopy="changeCopy">changeCopy</button>

  <hr />
  <input type="text" v-model="text" />
</template>

<script setup lang="ts">
import {
  isReactive,
  markRaw,
  onMounted,
  onUpdated,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  watchEffect,
} from "vue";

import { useDebouncedRef } from "../hooks/useDebouncedRef";

// shallowRef
const count = shallowRef(123);

const state = shallowRef({ count: { a: 123 } });
console.log("state :", state);

//由于setup位于组件挂载之前，所以这里写可以修改

// onMounted(() => {
//   console.log("组件挂载了");
// });

// console.log('setup执行完毕');

// state.value.count.a = 1111111;

// onUpdated(() => {
//     state.value.count.a = 1111111;
// })

function change() {
  state.value.count.a = 1111111;
}

function changeCount() {
  state.value = { count: { a: 11122 } };
}

// shallowReactive

let stateReactive = shallowReactive({ count: { a: 123 } });
function changeReactive() {
  stateReactive.count.a = 1111111;
}

function changeReactiveCount() {
  //会丢失响应式
  // stateReactive = { count: { a: 1113322212121 } };
  Object.assign(stateReactive, { count: { a: 1221244231312 } });
}

//ReadOnly
const origin = reactive({ count: 0 });
const copy = readonly(origin);

function changeOrigin() {
  origin.count++;
}
function changeCopy() {
  copy.count++;
}

// shallowReadonly
const stateReadOnly = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

function changeFoo() {
  stateReadOnly.foo++;
}

function changeBar() {
  stateReadOnly.nested.bar++;
}

// toRaw
const foo = { qwe: 123 };
const reactiveFoo = reactive(foo);
console.log(toRaw(reactiveFoo));

// markraw
const fooRaw = markRaw({});
console.log("fooRaw :", fooRaw);
console.log(isReactive(fooRaw));
// 也适用于嵌套在其他响应性对象
const barRaw = reactive({ fooRaw });
console.log(isReactive(barRaw)); // true
console.log(isReactive(barRaw.fooRaw)); // false

//customRef
const text = useDebouncedRef("hello");

watchEffect(() => {
    console.log(text.value);
    
})
</script>
