<template>
  <div class="chip" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  active: Boolean
})
const activeClass = computed(() => ({
  'chip--active': props.active
}))
</script>

<style lang="scss" scoped>
.chip {
  font-weight: 500;
  font-size: 15px;

  color: #545454;
  background: #EEEEEE;
  border-radius: 20px;

  padding: 9px 15px;

  display: inline-block;

  cursor: pointer;
  
  transition: all .2s;
  &--active {
    background: #20B56C;
    color: #fff;
  }
}
</style>