<template>
  <div>
    <div class="order">
      <h2 class="order__title">Your Order</h2>
      <ul v-if="order.length" class="order__list">
        <li v-for="(item, index) in order" :key="index" class="order__item">
          <span> {{ item.name }} - ${{ item.price }} </span>

          <button class="order__remove" @click="$emit('remove-item', index)">Remove</button>
        </li>
      </ul>

      <p v-else class="order__empty">No items added yet.</p>

      <div v-if="order.length" class="order__summary">
        <h3>Total: ${{ total }}</h3>

        <button class="order__clear" @click="$emit('clear-order')">Clear Order</button>
        <button class="order__checkout" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['remove-item', 'clear-order'])

defineProps({
  order: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})

function checkout() {
  alert("Your order is ready! Enjoy! Thank you for visiting")
  emit('clear-order')
}
</script>

<style scoped>
.order {
  font-family: 'Poppins', sans-serif;
  margin-top: 40px;
  padding: 20px;
  border-top: 2px solid #eee;
}

.order__title {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 15px;
}

.order__list {
  font-family: 'Poppins', sans-serif;
  list-style: none;
  padding: 0;
}

.order__item {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.order__remove {
  font-family: 'Poppins', sans-serif;
  background-color: #b33a3a;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.order__remove:hover {
  font-family: 'Poppins', sans-serif;
  background-color: #922c2c;
}

.order__summary {
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
  text-align: center;
}

.order__clear {
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

.order__clear:hover {
  font-family: 'Poppins', sans-serif;
  background-color: #000;
}

.order__empty {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: gray;
}

.order__checkout {
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #6f4e37;
  color: white;
  cursor: pointer;
  display: block;
  margin: 10px auto 0 auto;
}

.order__checkout:hover {
  font-family: 'Poppins', sans-serif;
  background-color: #5a3d2b;
}
</style>
