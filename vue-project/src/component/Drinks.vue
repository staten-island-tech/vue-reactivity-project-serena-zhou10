<template>
  <div>
    <h1>Coffee Maker</h1>
    <h2>{{ drinks.name }}</h2>
    <h3>{{ drinks.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  drinks: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
}
</style>
