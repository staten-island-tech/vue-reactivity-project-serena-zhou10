<template>
  <div>
    <h1>Drink Maker</h1>
    <builder__form>
      <form></form>
    </builder__form>

    <div class="drink-maker">
      <div class="drink"></div>
      <div class="selected drink"></div>
      <form id="builder">
        <a :href="imageUrl" download=".png" @click="trackDownload">
          <button>Download Image</button>
        </a>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drinkOptions = {

}
</script>

<style scoped>
</style>
