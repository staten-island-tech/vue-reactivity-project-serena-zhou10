<template>
  <div>
    <div class="builder">
      <h2 class="builder__title">Select Your Items</h2>

      <div v-for="category in categories" :key="category" class="builder__category">
        <h3 class="builder__category__title">
          {{ formatCategory(category) }}
        </h3>

        <div class="builder__grid">
          <div v-for="drink in filteredDrinks(category)" :key="drink.id" class="builder__card" :class="drink.class">
            <h4 class="builder__name">{{ drink.name }}</h4>
            <p class="builder__price">${{ drink.price }}</p>
            <button class="builder__button" @click="$emit('add-to-order', drink)">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

function props(defineProps) {
  drinks: {
    type: Array,
    required; true
  }
}

function categories(computed){
  return [...new Set(props.drinks.map(d => d.category))]
}

function filteredDrinks(category) {
  return props.drinks.filter((drink) => {
    return drink.category === category
  })
}

function formatCategory(category) {
  const firstLetter = category.charAt(0).toUpperCase()
  const restOfWord = category.slice(1)
  return firstLetter + restOfWord
}
</script>

<style scoped>
.builder {
  padding: 20px;
}

.builder__title {
  text-align: center;
  margin-bottom: 20px;
}

.builder__category {
  margin-bottom: 30px;
}

.builder__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.builder__card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  width: 180px;
  text-align: center;
  transition: transform 0.2s ease;
  background: #fff;
}

.builder__card:hover {
  transform: scale(1.05);
}

.builder__button {
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #6f4e37;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.builder__button:hover {
  background-color: #5a3d2b;
}
</style>