<template>
  <div class="menu-item">
    <img class="menu-item__img" :src="img" :alt="name">
    <div class="menu-item__name">#{{ name }}</div>
  </div>    
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  img: String
})

</script>

<style lang="scss" scoped>
.menu-item {
  cursor: pointer;
  padding-bottom: 3px;
  &__img {
    width: 70px;
    height: 70px;
  }
  &__name {
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
  }
}
</style>