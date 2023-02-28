<template>
  <div class="goods-card">
    <div class="goods-card__photo">
      <img :src="cover" />
    </div>
    <div class="goods-card__data">
      <div class="goods-card__badge">{{ label }}</div>
      <div class="goods-card__title">
        {{ name }}
      </div>
      <div class="goods-card__info">
        <div class="goods-card__time">{{ duration }}</div>
        <div class="rating goods-card__rating">
          <ul class="rating__list">
            <div class="rating__item rating__item--checked"></div>
            <div class="rating__item rating__item--checked"></div>
            <div class="rating__item rating__item--checked"></div>
            <div class="rating__item rating__item--checked"></div>
            <div class="rating__item"></div>
          </ul>
          <div class="rating__val">{{ middleRating }} ({{ ratings.length }})</div>
        </div>
        <div class="goods-card__price">
          <strong>от {{ price }} ₽</strong> с человека
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const propsDescription = {
  name: {
    type: String,
    required: true
  },
	description: {
		type: String,
		required: true
	},
	label: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	ratings: {
		type: Array,
		required: true
	},
	cover: {
		type: String,
		required: true
	}
}
</script>

<script setup>
import { defineProps } from "vue";

const props = defineProps(propsDescription);

const middleRating = 
	Math.floor(
		10
		* props.ratings.reduce((acc, val) => acc += val, 0)
		/ props.ratings.length
	) / 10
</script>

<style lang="scss" scoped>
.goods-card {
  display: flex;
  cursor: pointer;

  &__photo {
    display: flex;
    flex-shrink: 0;
    position: relative;

    width: 130px;
    height: 130px;

    margin-right: 15px;

    overflow: hidden;
    border-radius: 10px;

    img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__data {
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
    min-width: 0;
  }

  &__badge {
    margin-bottom: 3px;
    padding: 0px 10px;

    font-weight: 500;
    font-size: 15px;

    color: #ffffff;
    line-height: 21px;
    text-align: center;

    border-radius: 5px;
    background: #0071eb;
  }

  &__title {
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    max-width: 209px;
  }

  &__info {
    margin-top: auto;
  }

  &__time {
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 12px;
    line-height: 10px;
    color: #6d747c;
  }

  &__rating {
    margin-bottom: 3px;
  }

  &__price {
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
}

.rating {
  display: flex;
  align-items: center;

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
    margin-left: 10px;
    position: relative;
    top: 2px;
    color: #000000;
    font-size: 15px;
    line-height: 17px;
  }
}
</style>