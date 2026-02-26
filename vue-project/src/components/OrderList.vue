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
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.order {
  margin-top: 40px;
  padding: 20px;
  border-top: 2px solid #eee;
}

.order__title {
  text-align: center;
  margin-bottom: 15px;
}

.order__list {
  list-style: none;
  padding: 0;
}

.order__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.order__remove {
  background-color: #b33a3a;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.order__remove:hover {
  background-color: #922c2c;
}

.order__summary {
  margin-top: 20px;
  text-align: center;
}

.order__clear {
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

.order__clear:hover {
  background-color: #000;
}

.order__empty {
  text-align: center;
  color: gray;
}
</style>
