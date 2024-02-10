<template>
  <div>
    <div>122112</div>
    <div>parent bound v-model is: {{ model }}</div>
    <input type="text" v-model="model" />
    <button @click="update">+</button>

    <hr />
    <input type="text" v-model="title" />
    <input type="text" v-model="otherval" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

// const props = defineProps(['foo']);
// console.log('props.foo :', props.foo);

// const props = defineProps({
//   title: String,
//   likes: Number,
// });

// const props = defineProps<{
//   title: String;
//   likes?: Number;
// }>();

interface Props {
  title: String;
  likes?: Number;
}

const props = defineProps<Props>();

const innerTitle = ref(props.title);

innerTitle.value = "qwe";

console.log("props.title:", props.title);
console.log("innerTitle :", innerTitle.value);

// 基于选项（对象）
// const emit = defineEmits({
//   submit: (id: number, name: string) => {},
//   save: (name: string) => {},
// });

// 基于类型（类）
// const emit = defineEmits<{
//   (e: "submit", id: number, name: string): void;
//   (e: "save", name: string): void;
// }>();

// 函数写成元祖（类）
const emit = defineEmits<{
  submit: [id: number, name: string];
  save: [name: string];
}>();

//定义model
const model = defineModel({ required: true, default: 0 });
function update() {
  //   (model.value as number)++;
  //   (<number>model.value)++;
  //有了默认值不需要进行类型断言
  model.value++;
}
emit("submit", 123, "111");

const title = defineModel("titleval");
const otherval = defineModel("otherval");
</script>
