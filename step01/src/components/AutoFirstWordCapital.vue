<template>
  <input type="text" v-model="model" />
</template>

<script setup lang="ts">
const [model, modifiers] = defineModel({
  set(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
});
console.log("model :", model.value);
console.log("modifiers :", modifiers);
</script>
