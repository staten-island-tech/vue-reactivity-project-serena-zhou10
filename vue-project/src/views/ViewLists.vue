<template>
  <div>
    <div class="container">
      <Drinks v-for="drink in drinks" :key="drink.name" :drink="drink">{{ drink.name }}</Drinks>
    </div>
  </div>
</template>

<script setup>
import Drinks from '@/component/Drinks.vue'

const drinks = [
  { id: 'espresso', name: 'espresso', price: 7, category: 'base', class: 'drink-espresso' },
  { id: 'mocha', name: 'mocha', price: 5, category: 'base', class: 'drink-mocha' },
  { id: 'coldbrew', name: 'cold brew', price: 9, category: 'base', class: 'drink-coldbrew' },
  { id: 'americano', name: 'americano', price: 9, category: 'base', class: 'drink-americano' },
  { id: 'latte', name: 'latte', price: 9, category: 'base', class: 'drink-latte' },
  { id: 'cappuccino', name: 'cappuccino', price: 9, category: 'base', class: 'drink-cappuccino' },
  { id: 'flatwhite', name: 'flat white', price: 9, category: 'base', class: 'drink-flatwhite' },
  { id: 'macchiato', name: 'macchiato', price: 9, category: 'base', class: 'drink-macchiato' },

  { id: 'wholemilk', name: 'whole milk', price: 2, category: 'milk', class: 'drink-wholemilk' },
  {
    id: 'reducedfatmilk',
    name: 'reduced fat milk',
    price: 2,
    category: 'milk',
    class: 'drink-reducedfatmilk',
  },
  { id: 'skimmilk', name: 'skim milk', price: 2, category: 'milk', class: 'drink-skimmilk' },
  { id: 'oatmilk', name: 'oat milk', price: 2, category: 'milk', class: 'drink-oatmilk' },
  { id: 'soymilk', name: 'soy milk', price: 2, category: 'milk', class: 'drink-soymilk' },
  { id: 'almondmilk', name: 'almond milk', price: 2, category: 'milk', class: 'drink-almondmilk' },
  {
    id: 'coconutmilk',
    name: 'coconut milk',
    price: 2,
    category: 'milk',
    class: 'drink-coconutmilk',
  },

  { id: 'coldfoam', name: 'cold foam', price: 2, category: 'topping', class: 'drink-coldfoam' },
  {
    id: 'whippedcream',
    name: 'whipped cream',
    price: 2,
    category: 'topping',
    class: 'drink-whippedcream',
  },
  { id: 'caramel', name: 'caramel drizzle', price: 1, category: 'topping', class: 'drink-caramel' },
  { id: 'icecream', name: 'ice cream', price: 1, category: 'topping', class: 'drink-icecream' },
  {
    id: 'chocolate',
    name: 'chocolate drizzle',
    price: 1,
    category: 'topping',
    class: 'drink-chocolate',
  },
]
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
