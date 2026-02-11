<template>
  <div>
    <h1>Drink Maker</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drinkOptions = [
  { id: "coffee", name: "coffee", price: 7, category: "base", class: "drink-coffee" },
  { id: "tea", name: "tea", price: 5, category: "base", class: "drink-tea" },
  { id: "matcha", name: "matcha", price: 9, category: "base", class: "drink-matcha" },

  { id: "milk", name: "milk", price: 2, category: "milk", class: "drink-milk" },
  { id: "oatmilk", name: "oat milk", price: 2, category: "milk", class: "drink-oatmilk" },

  { id: "foam", name: "foam", price: 2, category: "foam", class: "drink-foam" },
  { id: "whipped", name: "whipped cream", price: 2, category: "foam", class: "drink-whipped" },

  { id: "caramel", name: "caramel drizzle", price: 1, category: "topping", class: "drink-caramel" },
  { id: "boba", name: "boba", price: 1, category: "topping", class: "drink-boba" },
  { id: "cinnamon", name: "cinnamon", price: 1, category: "topping", class: "drink-cinnamon" }
];

const selectedItems = ref([]);
</script>

<style scoped></style>
