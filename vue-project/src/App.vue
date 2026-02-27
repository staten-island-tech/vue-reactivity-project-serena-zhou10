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
  { id: 'noice', name: 'no ice', price: 0, category: 'ice level', class: 'ice-noice', },
  { id: 'littleice', name: 'little ice', price: 0, category: 'ice level', class: 'ice-littleice', },
  { id: 'regularice', name: 'regular ice', price: 0, category: 'ice level', class: 'ice-regularice', },
  { id: 'extraice', name: 'extra ice', price: 0, category: 'ice level', class: 'ice-extraice', },

  { id: 'noaddedsugar', name: '0% sugar', price: 0, category: 'sugar level', class: 'sugar-noaddedsugar' },
  { id: 'littlesugar', name: '25% sugar', price: 0, category: 'sugar level', class: 'sugar-littlesugar' },
  { id: 'moderatesugar', name: '50% sugar', price: 0, category: 'sugar level', class: 'sugar-moderatesugar' },
  { id: 'lesssugar', name: '50% sugar', price: 0, category: 'sugar level', class: 'sugar-lesssugar' },
  { id: 'regularsugar', name: '50% sugar', price: 0, category: 'sugar level', class: 'sugar-regularsugar' },
  
  { id: 'espresso', name: 'espresso', price: 3, category: 'base', class: 'drink-espresso' },
  { id: 'flatwhite', name: 'flat white', price: 3, category: 'base', class: 'drink-flatwhite' },
  { id: 'ristretto', name: 'ristretto', price: 3, category: 'base', class: 'drink-ristretto' },
  { id: 'lungo', name: 'lungo', price: 3.5, category: 'base', class: 'drink-lungo' },
  { id: 'mocha', name: 'mocha', price: 4, category: 'base', class: 'drink-mocha' },
  { id: 'americano', name: 'americano', price: 4, category: 'base', class: 'drink-americano' },
  { id: 'cappuccino', name: 'cappuccino', price: 4, category: 'base', class: 'drink-cappuccino' },
  { id: 'doppio', name: 'double espresso', price: 4, category: 'base', class: 'drink-doppio' },
  { id: 'cortado', name: 'cortado', price: 4.5, category: 'base', class: 'drink-cortado' },
  { id: 'gibraltar', name: 'gibraltar', price: 4.5, category: 'base', class: 'drink-gibraltar' },
  { id: 'coldbrew', name: 'cold brew', price: 5, category: 'base', class: 'drink-coldbrew' },
  { id: 'latte', name: 'latte', price: 6, category: 'base', class: 'drink-latte' },
  { id: 'macchiato', name: 'macchiato', price: 6, category: 'base', class: 'drink-macchiato' },

  { id: 'wholemilk', name: 'whole milk', price: 0, category: 'milk', class: 'drink-wholemilk' },
  { id: 'skimmilk', name: 'skim milk', price: 0, category: 'milk', class: 'drink-skimmilk' },
  { id: 'reducedfatmilk', name: 'reduced fat milk', price: 0.5, category: 'milk', class: 'drink-reducedfatmilk' },
  { id: 'lactosefree', name: 'lactose free milk', price: 0.5, category: 'milk', class: 'drink-lactosefree' },
  { id: 'steamedmilk', name: 'steamed milk', price: 0.5, category: 'milk', class: 'drink-steamedmilk' },
  { id: 'coconutmilk', name: 'coconut milk', price: 0.5, category: 'milk', class: 'drink-coconutmilk' },
  { id: 'oatmilk', name: 'oat milk', price: 1, category: 'milk', class: 'drink-oatmilk' },
  { id: 'soymilk', name: 'soy milk', price: 1, category: 'milk', class: 'drink-soymilk' },
  { id: 'almondmilk', name: 'almond milk', price: 1, category: 'milk', class: 'drink-almondmilk' },

  { id: 'nofoam', name: 'no foam', price: 0, category: 'foam', class: 'foam-lightfoam' },
  { id: 'lightfoam', name: 'light foam', price: 0, category: 'foam', class: 'foam-lightfoam' },
  { id: 'extrafoam', name: 'extra foam', price: 0.5, category: 'foam', class: 'foam-extrafoam' },
  { id: 'coldfoam', name: 'cold foam', price: 1, category: 'topping', class: 'drink-coldfoam' },

  { id: 'caramel', name: 'caramel drizzle', price: 0.5, category: 'topping', class: 'drink-caramel' },
  { id: 'whippedcream', name: 'whipped cream', price: 1, category: 'topping', class: 'drink-whippedcream' },
  { id: 'chocolate', name: 'chocolate drizzle', price: 1, category: 'topping', class: 'drink-chocolate' },
  { id: 'extrashot', name: 'extra espresso shot', price: 1.5, category: 'topping', class: 'drink-extrashot' },
  { id: 'vanillasyrup', name: 'vanilla syrup', price: 0.5, category: 'topping', class: 'drink-vanillasyrup' },
  { id: 'caramelsyrup', name: 'caramel syrup', price: 0.5, category: 'topping', class: 'drink-caramelsyrup' },
  { id: 'hazelnutsyrup', name: 'hazelnut syrup', price: 0.5, category: 'topping', class: 'drink-hazelnutsyrup' }
]

const order = ref([])

const singleSelectCategories = ['ice level', 'base', 'milk']

const addToOrder = (drink) => {
  if (singleSelectCategories.includes(drink.category)) {
    order.value = order.value.filter(
      item => item.category !== drink.category
    )
  }
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

<style scoped>
.coffee__title {
  padding-left: 1rem;
}
</style>
