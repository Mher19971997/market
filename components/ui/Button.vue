<template>
  <button class="button" :type="type">
    <slot />
  </button>    
</template>

<script setup>
import { defineProps } from "vue"

defineProps({
  type: String
})
</script>

<style lang="scss" scoped>
$background-color: #654321;

button {
  background: $background-color;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;

  &:active {
    opacity: 0.5
  }
}
</style>