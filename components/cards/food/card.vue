<template>
  <div class="offer-card">
    <div class="offer-card__photo">
      <img
        :src="props.cover"
        alt=""
        class="offer-card__img"
      />
    </div>
    <div class="offer-card__data">
      <div class="offer-card__price">{{ props.price }} P</div>
      <div class="offer-card__name">{{ props.title }}</div>
      <div class="offer-card__wt"></div>
    </div>
    <button class="offer-card__button" v-if="!props.modelValue" @click="plusNumber">Добавить</button>
    <div class="plus-minus" v-else>
      <div class="plus-minus__item" @click="minusNumber"><div style="margin-top: 0px">-</div></div>
      <input type="text" disabled="disabled" size="5" class="plus-minus__num" :value="props.modelValue" />
      <div class="plus-minus__item" @click="plusNumber"><div style="margin-top: 4px">+</div></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number
  }
})

const emit = defineEmits(['update:modelValue'])

const plusNumber = () => emit('update:modelValue', props.modelValue + 1)
const minusNumber = () => {
  if (props.modelValue <= 0) return
  emit('update:modelValue', props.modelValue - 1)
}
</script>

<style lang="scss" scoped>
.offer-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  background: #f5f4f2;
  border-radius: 20px;
  max-width: 180px;
  justify-content: space-between;

  &__photo {
    display: flex;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    max-height: 150px;
    border-radius: 20px;
    overflow: hidden;
  }

  &__photo img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
  }

  &__data {
    margin-top: 12px;
    padding-left: 7px;
  }

  &__button {
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding: 10px;
    height: 40px;
    background: #fff;
    border-radius: 25px;
    border: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #000;
    cursor: pointer;
  }
}
.plus-minus {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 5px;
  margin-top: 12px;
  &__item {
    cursor: pointer;
    background: #fff;
    height: 40px;
    font-weight: 500;
    font-size: 30px;
    padding: 0 20px;
  }

  &:first-child {
    border-radius: 25px 0 0 25px;
    -webkit-border-radius: 25px 0 0 25px;
    -moz-border-radius: 25px 0 0 25px;
    -ms-border-radius: 25px 0 0 25px;
    -o-border-radius: 25px 0 0 25px;
  }

  &__num {
    max-width: 40px;
    border: 0;
    background: #fff;
    font-weight: 500;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    color: #000;
  }
}
</style>