<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ noReactiveCount }}</div>
    <button @click="increament">+</button>

    <div>{{ obj.nested.count }}</div>
    <div v-for="(item, index) in obj.array" :key="index">
      {{ item }}
    </div>

    <button @click="mutateDeeply">+</button>

    <div>{{ state.count }}</div>
    <button @click="mutateState">++</button>

    <hr />

    <div>{{ reactiveObj.numdeep.test + 1 }}</div>
    <hr />
    <div>{{ myCount + 1 }}</div>
    <div>{{ myObj.test }}</div>
    <div>{{ myObj.test + 1 }}</div>
    <div>{{ test }}</div>
    <div>{{ test + 1 }}</div>
  </div>
</template>

<!-- <script lang="ts">
import { ref } from "vue";

export default {
  name: "HomeView",

  methods: {},
  setup() {
    const count = ref(0);
    let noReactiveCount = 0;
    console.log(count.value);
    function increament() {
      count.value++;
      noReactiveCount++;
      console.log("count.value+ :", count.value);
      console.log("noReactiveCount :", noReactiveCount);
    }
    return {
      count,
      increament,
      noReactiveCount,
    };
  },
};
</script> -->

<script setup lang="ts">
import { reactive, ref } from "vue";
const count = ref(0);

//obj是一个RefImpl对象
const obj = ref({
  nested: { count: 0 },
  array: ["foo", "bar"],
});
console.log("obj :", obj);

//state是一个proxy对象，是一个深层响应式对象
const state = reactive({
  count: 0,
});

let noReactiveCount = 0;

function mutateDeeply() {
  obj.value.nested.count++;
  obj.value.array.push("12121");
  console.log("obj.value :", obj.value);
}

function mutateState() {
  state.count++;
}

function increament() {
  count.value++;
  noReactiveCount++;
  console.log("count.value+ :", count.value);
  console.log("noReactiveCount :", noReactiveCount);
}

//自动解包：reactive、模板引擎
// 解包：确实已经是属性值了

//1.ref基本数据类型、对象 赋值给reactive对象的属性时，访问或修改该属性会自动解包(此时再.value会报错)
//只有深层响应式对象才会发生解包
const num = ref(0);
const reactiveObj = reactive({
  num: num,
  numdeep: { test: ref(123) },
});
console.log("reactiveObj :", reactiveObj);
console.log(reactiveObj.num);
console.log(++reactiveObj.num);
// 以访问深层ref依然可以解包
console.log("reactiveObj.numdeep.test", reactiveObj.numdeep.test);

const num2 = ref({ test: 111 });
const reactiveObj2 = reactive({
  num2: num2,
});
console.log("reactiveObj2 :", reactiveObj);
console.log(reactiveObj2.num2);
console.log(reactiveObj2.num2.test);

//数组、集合不会自动解包
const books = reactive([ref("this is a test"), ref("this is a test22112")]);
//books是一个ref数组
console.log("books :", books);
//不会自动解包
console.log("books :", books[0]);
//需要.value
console.log(books[0].value);
//但是没必要像上面那样写，可以：
// const books = reactive(["this is a test", "this is a test22112"]);

//2.模板引擎自动解包(此时再.value会报错)
// 只有顶级的ref属性myCount才会解包
//非顶级的ref属性需要在{{}}中最终计算结果是ref才会解包，不然不会解包
// 顶级属性先解包后计算，非~先计算后解包
const myCount = ref(1111);
const myObj = {
  test: ref(123),
};
console.log(myObj.test.value + 1);

//非顶级ref属性可以通过解构赋值拿出来，成为顶级属性
const { test } = myObj;
</script>
