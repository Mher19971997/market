<template>
  <ul class="services-rating__list">
    <div
      v-for="(_, i) in Array(value).fill()"
      :key="i"
      class="services-rating__item services-rating__item--checked"
    ></div>
    <div
      v-for="(_, i) in Array(5 - value).fill()"
      :key="i"
      class="services-rating__item"
    ></div>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  value: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.services-rating {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__list {
    display: flex;
    align-items: center;

    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    display: flex;
    flex-shrink: 0;
    width: 17px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");

    &--checked {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z' fill='%23FAD636'/%3E%3C/svg%3E%0A");
    }
  }

  &__val {
    margin-right: 10px;
    position: relative;
    top: 2px;
    color: #000000;
    font-size: 15px;
    line-height: 17px;
  }

  &__reviews {
    margin-top: 7px;
    width: 100%;
    font-size: 15px;
    line-height: 17px;
    text-align: right;
    color: #0071eb;
  }
}
</style>