<template>
  <div class="calendar-block">
    <div class="calendar-block__section">
      <div class="calendar-block__title">Забронировать</div>
      <div class="calendar-block__body">
        <div class="calendar-block__row">
          <div class="calendar-block__label">Дата и время</div>
          <div class="calendar-block__inner">
            <div class="calendar-block__field">
              <img
                :src="require('/src/assets/imgs/services/6.svg')"
                class="calendar-block__icon"
              />
              <input
                v-model="date"
                type="date"
                class="calendar-block__input calendar-block__date"
              />
            </div>

            <div class="calendar-block__field">
              <img
                :src="require('/src/assets/imgs/services/7.svg')"
                class="calendar-block__icon"
              />
              <input
                v-model="time"
                type="time"
                class="calendar-block__input calendar-block__date"
              />
            </div>
          </div>
        </div>

        <div class="calendar-block__row">
          <div class="calendar-block__label">Количество гостей</div>

          <div class="calendar-block__wrapper">
            <div class="calendar-block__caption">Взрослые</div>
            <div class="counter calendar-block__counter">
              <div 
                class="counter__minus counter__button"
                @click="persons.adults = Math.max(0, persons.adults -= 1)"
              >
                -
              </div>
              <div class="counter__value">{{ persons.adults }}</div>
              <div
                class="counter__button counter__minus"
                @click="persons.adults++"
              >+</div>
            </div>
          </div>

          <div class="calendar-block__wrapper">
            <div class="calendar-block__caption">Дети (До 7 лет)</div>
            <div class="counter calendar-block__counter">
              <div 
                class="counter__minus counter__button"
                @click="persons.kids = Math.max(0, persons.kids -= 1)"
              >
                -
              </div>
              <div class="counter__value">{{ persons.kids }}</div>
              <div
                class="counter__button counter__minus"
                @click="persons.kids++"
              >+</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar-block__section">
      <div class="calendar-block__heading">Чек</div>
      <div class="calendar-block__list">
        <div class="calendar-block__item">
          <div class="calendar-block__text">Бронирование</div>
          <div class="calendar-block__text">{{ props.prices.reserve }} ₽</div>
        </div>
        <div class="calendar-block__item">
          <div class="calendar-block__text">К оплате в день тура</div>
          <div class="calendar-block__text">{{ calcPrice() - props.prices.reserve }} ₽</div>
        </div>
      </div>
    </div>

    <button class="calendar-block__button" @click="book">Забронировать через Whatsapp</button>
  </div>
</template>
  
<script setup>
import { ref, defineProps} from "vue"


const persons = ref({
  adults: 1,
  kids: 0
})

const props = defineProps({
  prices: {
    type: Object,
    required: true
  },
  bookingName: {
    type: Object,
    required: true
  },
  bookingPhone: {
    type: Object,
    required: true
  }
})

const calcPrice = () => (
  props.prices.adult * persons.value.adults +
  props.prices.kid * persons.value.kids +
  props.prices.reserve
)

const date = ref(new Date())
const time = ref(new Date())

const book = () => {
  const br = `%0a‎`
  let text = `Данные по бронированию: ${br}`
  text += `Тур: ${date.value} ${br}`
  text += `Дата: ${time.value} ${br}`
  text += `Время: ${persons.value.adults} ${br}`
  text += `Количество взрослых: ${persons.value.adults} ${br}`
  text += `Количество детей: ${persons.value.kids} ${br}`
  text += `Стоимость: ${calcPrice()} ${br}`
  // window.open(
  //   `https://wa.me/${props.bookingPhone}?text=${text}`,
  //   '_blank'
  // );
}

</script>
  
<style lang="scss" scoped>
.calendar-block {
  &__section {
    margin-bottom: 10px;
    padding: 15px;
    background: #ffffff;
    border-radius: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    margin-bottom: 15px;

    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  &__label {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }

  &__inner {
    display: flex;
    margin: 0 -4px;
  }

  &__field {
    display: flex;
    position: relative;
    padding: 0 4px;
    width: 50%;
  }

  &__input {
    width: 100%;
    padding: 0 16px 0 55px;
    height: 52px;
    min-width: 0;

    background: #f2f2f2;
    border-radius: 8px;
    border: 0;

    font-size: 16px;
    line-height: 19px;
    color: #6d747c;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #6d747c;
    }
  }

  &__icon {
    position: absolute;
    left: 20px;
    top: 14px;
    z-index: 1;
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 0;
    display: none;
  }

  &__row,
  &__wrapper {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 5px;

    background: #f2f2f2;
    border-radius: 8px;
  }

  &__caption {
    padding-right: 15px;
    font-size: 15px;
    line-height: 17px;
    color: #6d747c;
  }

  &__heading {
    padding: 15px;
    margin: 0 -15px 20px;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;

    font-size: 15px;
    line-height: 17px;
    color: #000000;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 15px;
    padding: 15px;
    width: 100%;
    height: 51px;

    margin-top: 20px;

    background: #0071eb;
    border-radius: 5px;
    border: 0;
    cursor: pointer;

    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
}

.counter {
  display: flex;
  align-items: start;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 34px;
    height: 34px;

    background: #ffffff;
    border-radius: 4px;
    cursor: pointer;

    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
  }

  &__value {
    margin: 0 15px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #1f5eff;
    min-width: 22px;
  }
}
</style>