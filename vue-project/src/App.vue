<template>
  <div class="coffee">
    <h1 class="coffee__title">Build Your Own Coffee</h1>

    <div class="coffee__layout">
      <CoffeeBuilder :drinks="drinks" @add-to-order="addToOrder" />

      <OrderList :order="order" :total="total" @remove-item="removeItem" @clear-order="clearOrder" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CoffeeBuilder from './components/CoffeeBuilder.vue'
import OrderList from './components/OrderList.vue'

const drinks = [
  { id: 'espresso', name: 'espresso', price: 3, category: 'base', class: 'drink-espresso' },
  { id: 'mocha', name: 'mocha', price: 4, category: 'base', class: 'drink-mocha' },
  { id: 'coldbrew', name: 'cold brew', price: 5, category: 'base', class: 'drink-coldbrew' },
  { id: 'americano', name: 'americano', price: 4, category: 'base', class: 'drink-americano' },
  { id: 'latte', name: 'latte', price: 6, category: 'base', class: 'drink-latte' },
  { id: 'cappuccino', name: 'cappuccino', price: 4, category: 'base', class: 'drink-cappuccino' },
  { id: 'flatwhite', name: 'flat white', price: 3, category: 'base', class: 'drink-flatwhite' },
  { id: 'macchiato', name: 'macchiato', price: 6, category: 'base', class: 'drink-macchiato' },

  { id: 'wholemilk', name: 'whole milk', price: 0, category: 'milk', class: 'drink-wholemilk' },
  { id: 'reducedfatmilk', name: 'reduced fat milk', price: 0.5, category: 'milk', class: 'drink-reducedfatmilk', },
  { id: 'skimmilk', name: 'skim milk', price: 0, category: 'milk', class: 'drink-skimmilk' },
  { id: 'oatmilk', name: 'oat milk', price: 1, category: 'milk', class: 'drink-oatmilk' },
  { id: 'soymilk', name: 'soy milk', price: 1, category: 'milk', class: 'drink-soymilk' },
  { id: 'almondmilk', name: 'almond milk', price: 1, category: 'milk', class: 'drink-almondmilk' },
  { id: 'coconutmilk', name: 'coconut milk', price: 0.5, category: 'milk', class: 'drink-coconutmilk', },

  { id: 'coldfoam', name: 'cold foam', price: 1, category: 'topping', class: 'drink-coldfoam' },
  { id: 'whippedcream', name: 'whipped cream', price: 1, category: 'topping', class: 'drink-whippedcream', },
  { id: 'caramel', name: 'caramel drizzle', price: 0.5, category: 'topping', class: 'drink-caramel' },
  { id: 'icecream', name: 'ice cream', price: 2, category: 'topping', class: 'drink-icecream' },
  { id: 'chocolate', name: 'chocolate drizzle', price: 1, category: 'topping', class: 'drink-chocolate', },
]

const order = ref([])

const addToOrder = (drink) => {
  order.value.push(drink)
}

const removeItem = (index) => {
  order.value.splice(index, 1)
}

const clearOrder = () => {
  order.value = []
}

const total = computed(() => {
  return order.value.reduce((sum, item) => sum + item.price, 0)
})
</script>

<style scoped></style>
