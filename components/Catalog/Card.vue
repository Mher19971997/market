<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="card__comment">
      <span>
        {{ subtitle }}
      </span>
      <span>
        {{ subtitle }}
      </span>
      <span>
        {{ subtitle }}
      </span>
    </div>

    <div class="card__cardImg">
      <img :src="banner" :alt="title" class="card__banner" />
      <img :src="banner" :alt="title" class="card__banner" />
      <img :src="banner" :alt="title" class="card__banner" />
    </div>
    <div class="card__bottom">
      <div class="card__text">
        <div class="card__subtitle">
          <span>
            {{ comment }}
          </span>
        </div>
      </div>
      <div class="card__rating">
        <b>{{ rating }},</b>
        <span>{{ marksNum }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

import { defineProps } from "vue"

defineProps({
  title: String,
  banner: String,
  cardImg: String,
  cafeUrl: String,
  subtitle: String,
  comment: String,
  rating: Number,
  marksNum: Number,
  product: String,
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: block;
  text-decoration: none;


  &__banner {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 15px;
  }

  &__title {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    padding-bottom: 10px;
  }

  &__subtitle {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__rating {
    padding: 7px 12px;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    gap: 3px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    color: rgba(0, 0, 0, 0.5);
  }

  &__comment {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }

  &__labels {
    position: absolute;
    top: 22px;
    right: 0;
  }
  &__cardImg {
    display: flex;
    gap: 5px;
    // justify-content: space-between;
    padding-bottom: 5px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar {
      height: 0.4em;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #654321;
      border-radius: 5px;
    }
  }
}
</style>
