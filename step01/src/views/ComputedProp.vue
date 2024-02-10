<template>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

// author是响应式的，其改变计算属性才会改变，如果不是响应式则不变
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "YES" : "NO";
});

</script>
