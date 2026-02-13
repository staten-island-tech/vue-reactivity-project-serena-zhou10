<template>
  <div class="coffee">
    <h1 class="coffee__title">Build Your Own Coffee</h1>

    <CoffeeBuilder :drinks="drinks" @add-to-order="addToOrder" />

    <OrderList :order="order" :total="total" @remove-item="removeItem" @clear-order="clearOrder" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CoffeeBuilder from './component/CoffeeBuilder.vue'
import OrderList from './component/OrderList.vue'

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

<style scoped>
.drink {
  position: relative;
  width: 180px;
  height: 320px;
}

.cup {
  position: absolute;
  inset: 0;
  border: 4px solid #8b6b4f;
  border-radius: 0 0 40px 40px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.drink-layer {
  position: absolute;
  inset: 0;
  border-radius: 0 0 40px 40px;
  pointer-events: none;
}

.drink-espresso {
  background: linear-gradient(to top, #3b1f0f 0%, #5a2e16 100%);
}

.drink-mocha {
  background: linear-gradient(to top, #4b2c20 0%, #7a4a32 100%);
}

.drink-coldbrew {
  background: linear-gradient(to top, #2b160b 0%, #3e1f10 100%);
}

.drink-americano {
  background: linear-gradient(to top, #5c3418 0%, #7b4a25 100%);
}

.drink-latte {
  background: linear-gradient(to top, #c9a27c 0%, #e5c4a3 100%);
}

.drink-cappuccino {
  background: linear-gradient(to top,
      #7b4a25 0%,
      #7b4a25 60%,
      #f2e5d8 60%);
}

.drink-flatwhite {
  background: linear-gradient(to top,
      #9e6b47 0%,
      #9e6b47 50%,
      #f5eee6 50%);
}

.drink-macchiato {
  background: linear-gradient(to top,
      #4a2a17 0%,
      #4a2a17 70%,
      #f8f1e8 70%);
}

.drink-wholemilk {
  background: rgba(255,255,255,0.35);
}

.drink-reducedfatmilk {
  background: rgba(255,255,255,0.25);
}

.drink-skimmilk {
  background: rgba(255,255,255,0.18);
}

.drink-oatmilk {
  background: rgba(245,222,179,0.35);
}

.drink-soymilk {
  background: rgba(250,240,220,0.35);
}

.drink-almondmilk {
  background: rgba(255,228,196,0.4);
}

.drink-coconutmilk {
  background: rgba(255,255,255,0.45);
}

.drink-coldfoam {
  background: linear-gradient(
    to top,
    transparent 70%,
    #f6f1ea 70%
  );
}

.drink-whippedcream {
  background: radial-gradient(
    circle at 50% 5%,
    #ffffff 40px,
    transparent 41px
  );
}

.drink-caramel {
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(181,101,29,0.8) 20px,
      rgba(181,101,29,0.8) 30px
    );
}

.drink-chocolate {
  background:
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 20px,
      rgba(60,30,15,0.8) 20px,
      rgba(60,30,15,0.8) 30px
    );
}

.drink-icecream {
  background: radial-gradient(
    circle at 50% 15%,
    #fdf5e6 60px,
    transparent 61px
  );
}

.drink-caramel,
.drink-chocolate,
.drink-coldfoam {
  background-position: top;
  background-size: 100% 40%;
  background-repeat: no-repeat;
}

</style>
