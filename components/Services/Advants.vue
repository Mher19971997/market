<template>
  <div class="services-advants">
    <div class="services-advants__grid">
      <div class="services-advants__col">
        <div class="services-advants__card">
          <img
            :src="require('/src/assets/imgs/services/2.svg')"
            alt=""
            class="services-advants__icon"
          />
          <div class="services-advants__data">
            <div class="services-advants__title">Гарантия</div>
            <div class="services-advants__label">{{ props.guarant }}</div>
          </div>
        </div>
      </div>
      <div class="services-advants__col">
        <div class="services-advants__card">
          <img
            :src="require('/src/assets/imgs/services/3.svg')"
            alt=""
            class="services-advants__icon"
          />
          <div class="services-advants__data">
            <div class="services-advants__title">Время</div>
            <div class="services-advants__label">{{ props.time }}</div>
          </div>
        </div>
      </div>
      <div class="services-advants__col">
        <div class="services-advants__card">
          <img
            :src="require('/src/assets/imgs/services/4.svg')"
            alt=""
            class="services-advants__icon"
          />
          <div class="services-advants__data">
            <div class="services-advants__title">Моментальное</div>
            <div class="services-advants__label">Бронирование</div>
          </div>
        </div>
      </div>
      <div class="services-advants__col">
        <div class="services-advants__card">
          <img
            :src="require('/src/assets/imgs/services/5.svg')"
            alt=""
            class="services-advants__icon"
          />
          <div class="services-advants__data">
            <div class="services-advants__title">Группа</div>
            <div class="services-advants__label">{{ props.group }}</div>
          </div>
        </div>
      </div>
    </div>
    <button class="services-advants__button" @click="$emit('reserve')">Забронировать</button>
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props= defineProps({
  time: {
    type: String,
    required: true
  },
  guarant: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
})

</script>
  
<style lang="scss" scoped>
.services-advants {
  padding: 25px 15px;
  background: #1a2b49;

  &__grid {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: -30px;
  }

  &__col {
    width: 50%;
    margin-bottom: 30px;
  }

  &__card {
    display: flex;
    align-items: center;
  }

  &__data {
    margin-left: 14px;
  }

  &__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }

  &__label {
    margin-top: 6px;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;

    color: #c4c4c4;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;

    width: 100%;
    height: 37px;

    background: #0071eb;
    border-radius: 7px;
    cursor: pointer;
    border: 0;

    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;

    color: #ffffff;
  }
}
</style>