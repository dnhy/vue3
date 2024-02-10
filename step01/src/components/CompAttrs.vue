<template>
  <span>Fallthrough attribute: {{ $attrs }}</span>
  <div class="btn-wrapper">
    <!-- 透传的元素自动绑定到这，已经被props 和 emits处理的不再绑定 -->
    <button class="btn" v-bind="$attrs">click me</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log('attrs :', attrs);


// $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute
// defineProps(['foo-bar'])

// const emit = defineEmits({
//   click: () => {},
// });

// emit("click");
</script>
