<template>
  <div>
    <h1>Pizza Builder</h1>
    <builder__form>
      <form></form>
    </builder__form>

    <div class = "pizza-builder">
      <div class ="pizza"></div>
      <div class ="selectedCrust"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const pizzaOptions = {
  sizes: [
    { id: "small", label: "Small", scale: 0.8 },
    { id: "medium", label: "Medium", scale: 1 },
    { id: "large", label: "Large", scale: 1.2 }
  ],

  crusts: [
    { id: "thin", label: "Thin Crust", class: "crust-thin" },
    { id: "thick", label: "Thick Crust", class: "crust-thick" }
  ],

  sauces: [
    { id: "tomato", label: "Tomato Sauce", class: "sauce-tomato" },
    { id: "alfredo", label: "Alfredo Sauce", class: "sauce-alfredo" }
  ],

  toppings: [
    { id: "pepperoni", label: "Pepperoni", class: "topping-pepperoni" },
    { id: "mushrooms", label: "Mushrooms", class: "topping-mushrooms" },
    { id: "olives", label: "Olives", class: "topping-olives" }
  ]
};

const selectedSize = ref("medium");
const selectedCrust = ref("thin");
const selectedSauce = ref("tomato");
const selectedToppings = ref([]);
</script>

<style scoped>
.pizza {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
}

.pizza-base {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #f5c16c;
}

.crust-thin {
  border: 4px solid #d49b4a;
}

.crust-thick {
  border: 10px solid #c68642;
}

.pizza-sauce {
  position: absolute;
  inset: 10%;
  border-radius: 50%;
}

.sauce-tomato {
  background: #c0392b;
}

.sauce-alfredo {
  background: #f4f1e6;
}

.pizza-topping {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
}

.topping-pepperoni {
  background: repeating-radial-gradient(circle,
      transparent 0 20px,
      #b22222 20px 30px);
}

.topping-mushrooms {
  background: repeating-radial-gradient(circle,
      transparent 0 25px,
      #dcdcdc 25px 28px);
}

.topping-olives {
  background: repeating-radial-gradient(circle,
      transparent 0 18px,
      #2c2c2c 18px 22px);
}
</style>
