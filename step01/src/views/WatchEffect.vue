<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="todoId" :disabled="loading" />
      <!-- <input v-model="watchData" :disabled="loading" /> -->
    </p>
    <p ref="dataDom">{{ data }}</p>

    <hr />
    <div ref="watchDataDom" id="watchDataDom">{{ watchData }}</div>

    <button @click="watchData++">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
const todoId = ref(1);
const data = ref("");
const loading = ref(false);
const watchData = ref(231);
const data2 = ref(231);
const dataDom = ref(null);
const watchDataDom = ref(null);

// watch(
//   todoId,
//   async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     );

//     data.value = await response.json();
//     console.log("data.value :", data.value);
//   },
//   {
//     immediate: true,
//   }
// );

//详细实例可参考：https://www.cnblogs.com/crispyChicken/p/17405426.html
watchEffect(
  async () => {
    console.log("watchEffect回调执行了");
    
    console.log(watchData.value);
    //1.值变化->该回调函数执行完->dom更新，所以vue2要用this.$nextTick去获取更新后的dom，watchEffect使用{flush: "post"}将回调指定在dom刷新后触发
    //参考:https://blog.csdn.net/weixin_45549737/article/details/128816258
    console.log(document.querySelector("#watchDataDom")?.innerHTML);
    
    //2.遇到ref获取的dom，初次执行回调会多执行一次
    //   console.log("watchDataDom", watchDataDom.value);

    //3.只能收集同步代码的依赖，遇到异步的fetch就会停止依赖收集
    //参考：https://frontend.devrank.cn/traffic-information/7311290381533661211
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    data.value = await response.json();
  },
);
</script>
