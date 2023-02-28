<template>
  <div class="services" ref="servicesContainer" v-if="isLoading">
    <!-- <div class="container">
      <span class="services__back" @click="$emit('close')"></span>
    </div> -->
    <Slider class="services__slider" :photos="offer.photos" />
    <m-tabs
      v-if="servicesContainer"
      class="container"
      :scrollContainer="servicesContainer.parentElement"
      :tabs="['Обзор', 'Детали', 'О туре', 'Маршрут', 'Вопросы', 'Отзывы']"
    >
      <div class="services__section" v-if="offer">
        <div class="services__section-title">{{ offer.name }}</div>
        <div class="services__desc">
          {{
            offer.description
              .split(" ")
              .splice(0, showAllDescription ? 99999 : 15)
              .join(" ")
          }}
          <span
            v-if="offer.description.split(' ').length > 15"
            class="services__desc-button"
            @click="showAllDescription = !showAllDescription"
          >
            {{ showAllDescription ? "Скрыть" : "Подробнее" }}
          </span>
        </div>
        <div class="services__actions">
          <div class="services__price">
            от
            <strong>{{ offer.price }} ₽</strong>
            с человека
          </div>
          <div class="services-rating services__rating">
            <div class="services-rating__val">{{ middleRating }}</div>
            <stars :value="Math.floor(middleRating)" />
            <div class="services-rating__reviews">
              Отзывы: {{ offer.ratings.length }}
            </div>
          </div>
        </div>
      </div>

      <advants
        class="services__advants"
        :group="offer.advanteges.group"
        :time="offer.advanteges.time"
        :guarant="offer.advanteges.guarant"
        @reserve="openCalendar"
      />

      <div>
        <div class="services__section">
          <div class="services__section-title">О туре</div>
          <div class="services__section-caption">Впечатления</div>

          <ul class="services__list">
            <li
              v-for="(impression, i) in offer.impressions"
              :key="i"
              class="services__list-item"
            >
              {{ impression }}
            </li>
          </ul>
        </div>

        <div class="services__section services__section--border">
          <div class="services__section-caption">Что включено</div>

          <ul class="services__list services__list--icons">
            <li
              v-for="(include, i) in offer.includes"
              :key="i"
              class="services__list-item"
            >
              <svg
                v-if="include.isInclude"
                class="services__list-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#397C66"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                class="services__list-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  d="M18 6L6 18"
                  stroke="#A63948"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#A63948"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ include.text }}
            </li>
          </ul>
        </div>
      </div>

      <div class="services__section services__section--border">
        <div class="services__section-caption">Маршрут</div>

        <ul class="services__list services__list--padding">
          <li
            v-for="(route, i) in offer.route"
            :key="i"
            class="services__list-item"
          >
            <svg
              class="services__list-icon"
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.80324 20.3862L9.79971 20.3924L9.79529 20.3994C9.66315 20.6257 9.47403 20.8134 9.24677 20.9439C9.01951 21.0743 8.76204 21.143 8.5 21.143C8.23796 21.143 7.98049 21.0743 7.75323 20.9439C7.52597 20.8134 7.33685 20.6257 7.20471 20.3994L7.20029 20.3924L7.19676 20.3862C6.46192 19.224 5.72368 18.064 4.98206 16.9062C3.61794 14.7735 2.70382 13.3432 2.09324 12.2262C1.64941 11.4144 1.37941 10.7924 1.21882 10.2056C1.05824 9.62323 1 9.05853 1 8.35706C1 7.37214 1.19399 6.39687 1.5709 5.48693C1.94781 4.57699 2.50026 3.75019 3.1967 3.05376C3.89314 2.35732 4.71993 1.80487 5.62987 1.42796C6.53982 1.05105 7.51509 0.857056 8.5 0.857056C9.48491 0.857056 10.4602 1.05105 11.3701 1.42796C12.2801 1.80487 13.1069 2.35732 13.8033 3.05376C14.4997 3.75019 15.0522 4.57699 15.4291 5.48693C15.806 6.39687 16 7.37214 16 8.35706C16 9.05853 15.9418 9.62323 15.7812 10.2056C15.6206 10.7924 15.3506 11.4144 14.9076 12.2262C14.2962 13.3432 13.3812 14.7735 12.0188 16.9053C11.3826 17.9006 10.6494 19.0468 9.80412 20.3862H9.80324ZM8.5 11.7982C8.92873 11.7982 9.35326 11.7138 9.74935 11.5497C10.1454 11.3857 10.5053 11.1452 10.8085 10.842C11.1117 10.5389 11.3521 10.179 11.5162 9.78288C11.6803 9.38678 11.7647 8.96225 11.7647 8.53353C11.7647 8.1048 11.6803 7.68027 11.5162 7.28418C11.3521 6.88809 11.1117 6.52819 10.8085 6.22503C10.5053 5.92188 10.1454 5.6814 9.74935 5.51733C9.35326 5.35326 8.92873 5.26882 8.5 5.26882C7.63415 5.26882 6.80376 5.61278 6.1915 6.22503C5.57925 6.83728 5.23529 7.66767 5.23529 8.53353C5.23529 9.39938 5.57925 10.2298 6.1915 10.842C6.80376 11.4543 7.63415 11.7982 8.5 11.7982Z"
                fill="#FF5533"
                stroke="white"
                stroke-width="1.66667"
              />
            </svg>
            {{ route }}
          </li>
        </ul>
      </div>

      <div class="services__section" v-if="offer.faq">
        <div class="services__section-title">Часто задаваемые вопросы</div>

        <questions class="services__questions" :questions="offer.faq" />
      </div>
      <div>
        <div class="services__section services__section--border">
          <div class="services__section-title">
            Вам также может <br />понравиться:
          </div>

          <goods-card
            v-if="recommendationOffer"
            class="services__goods"
            v-bind="recommendationOffer"
            @click="$emit('toggleOffer', recommendationOffer)"
          />
        </div>

        <div class="services__section services__section--border">
          <div class="services__section-title services__section-title--center">
            Отзывы - 4.8/5
          </div>

          <div class="reviews-rating">
            <div class="reviews-rating__list">
              <div
                class="reviews-rating__item reviews-rating__item--checked"
              ></div>
              <div
                class="reviews-rating__item reviews-rating__item--checked"
              ></div>
              <div
                class="reviews-rating__item reviews-rating__item--checked"
              ></div>
              <div
                class="reviews-rating__item reviews-rating__item--checked"
              ></div>
              <div class="reviews-rating__item"></div>
            </div>
            <template v-if="recommendationOffer">
              <div
                v-for="(partOfRating, i) in recommendationOffer.part_review"
                :key="i"
                class="reviews-rating__label"
              >
                {{ partOfRating }}
              </div>
            </template>
          </div>
        </div>

        <div
          v-if="recommendationOffer && recommendationOffer.reviews"
          class="services__section services__section--border"
        >
          <review
            v-for="(review, i) in recommendationOffer.reviews"
            :key="i"
            class="services__review"
            :review="review"
          />
        </div>
      </div>
    </m-tabs>
    <div class="container">
      <div
        class="to-top-btn"
        @click="
          servicesContainer.scrollIntoView({
            behavior: 'smooth',
          })
        "
      ></div>
    </div>
    <div class="services-navs">
      <div class="container">
        <div class="servicec-navs__wrapper">
          <div class="services-navs__actions">
            <div class="services-navs__data">
              <div class="services-navs__price">
                От: <span>{{ offer.oldPrice }}</span> {{ offer.price }} ₽
              </div>
              <div class="services-navs__rating">
                {{ middleRating }}
                <span>Отзывы: {{ offer.ratings.length }}</span>
              </div>
            </div>
            <button class="services-navs__send" @click="openCalendar">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <vue-bottom-sheet ref="bookingSheet">
      <div class="container">
        <calendar
          :prices="offer.booking_prices"
          :bookingName="offer.name"
          :bookingPhone="getBookingPhone('whatsapp')"
        />
      </div>
    </vue-bottom-sheet> -->
  </div>
</template>
  
<script setup>
import GoodsCard from "@/Goods/GoodsCard";
import Slider from "./Slider";
import Advants from "./Advants";
import Questions from "./Questions";
import Review from "./ReviewCard";
import Stars from "./RatingStars";

import Calendar from "./Сalendar";
// import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";

import { defineProps, ref, computed } from "vue";

import Api from "/src/api/";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
  },
});

const servicesContainer = ref();

const bookingSheet = ref();
const openCalendar = () => bookingSheet.value.open();

const offer = ref();
const isLoading = ref(false);

const middleRating = computed(() => {
  const getMiddleRating = (ratings) => {
    return (
      Math.floor(
        (10 * ratings.reduce((acc, val) => (acc += val), 0)) / ratings.length
      ) / 10
    );
  };
  if (!offer.value) return 0;
  return getMiddleRating(offer.value.ratings);
});

const showAllDescription = ref(false);

const packUpOffer = (offer) => {
  let offerPuck = { ...offer };
  Object.keys(offerPuck.attributes).forEach((attrKey) => {
    offerPuck[offer.attributes[attrKey].name] = offer.attributes[attrKey].value;
  });
  delete offerPuck.attributes;
  return offerPuck;
};

const getBookingPhone = (name) =>
  props.contacts.find((c) => c.name == name).value;

const recommendationOffer = ref();

const loadOffer = async () => {
  const rawOffer = await Api.PartnerOffer.getOne(props.id);
  offer.value = packUpOffer(rawOffer);
  isLoading.value = true;

  Api.PartnerOffer.getOne(offer.value.recommendation[0]).then(
    (rec) => (recommendationOffer.value = packUpOffer(rec))
  );
}

loadOffer()
</script>
  
<style lang="scss" scoped>
.services {
  position: relative;
  padding-bottom: 150px;

  &__back {
    position: fixed;
    left: 15px;
    top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    cursor: pointer;
    border-radius: 50%;
    background: #ffffff;

    z-index: 6;

    box-shadow: 0 0 2px #000a;

    &::before {
      content: "";
      width: 15px;
      height: 22px;
      position: relative;
      left: -2px;
      background-image: url("data:image/svg+xml,%3Csvg width='15' height='22' viewBox='0 0 15 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1.99099' y1='11.9802' x2='13.0901' y2='1.89009' stroke='%233478F6' stroke-width='3'/%3E%3Cline x1='2.06066' y1='10.0294' x2='12.6673' y2='20.636' stroke='%233478F6' stroke-width='3'/%3E%3C/svg%3E%0A");
    }
  }

  &__body {
    position: relative;
  }

  &__tabs {
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;

    position: sticky;
    top: 0;
    background: #fff;
    z-index: 9;
  }

  &__section {
    padding: 0 15px 15px;

    &--border {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    &-title {
      padding: 20px 0;
      font-weight: 700;
      font-size: 27px;
      line-height: 31px;
      color: #000000;

      &--center {
        text-align: center;
      }
    }

    &-caption {
      padding: 15px 0;

      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      color: #000000;
    }
  }

  &__desc {
    font-weight: 300;
    font-size: 19px;
    line-height: 27px;
    color: #000000;

    &-button {
      color: #0071eb;
      cursor: pointer;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 15px;
  }

  &__price {
    display: flex;
    flex-direction: column;

    max-width: 150px;
    font-size: 17px;
    line-height: 20px;
    color: #000000;

    strong {
      font-size: 33px;
      line-height: 38px;
    }
  }

  &__rating {
    max-width: 115px;
  }

  &__list {
    margin: 0;
    padding: 0 0 0 10px;
    list-style-type: none;

    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: #6d747c;

    &--icons {
      padding-left: 0;

      .services__list-item::before {
        display: none;
      }
    }

    &--padding {
      padding-left: 40px;

      .services__list-item::before {
        display: none;
      }

      .services__list-item {
        margin-bottom: 30px;
        color: #000000;
        font-weight: 700;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &-item {
      display: flex;
      align-items: center;

      max-width: 370px;

      &::before {
        content: "";
        display: block;
        margin-right: 10px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        flex-shrink: 0;
        background: #6d747c;
      }
    }

    &-icon {
      flex-shrink: 0;
      margin-right: 9px;
    }
  }

  &__navs {
    position: fixed;
    bottom: 0;
    max-width: 430px;
    width: 100%;
    background: #fff;
  }
}
.reviews-rating {
  text-align: center;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    width: 48px;
    height: 46px;
    margin-right: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='46' viewBox='0 0 48 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");

    &:last-child {
      margin-right: 0;
    }

    &--checked {
      background-image: url("data:image/svg+xml,%3Csvg width='48' height='46' viewBox='0 0 48 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z' fill='%23FAD636'/%3E%3C/svg%3E%0A");
    }
  }

  &__label {
    margin-top: 12px;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #000000;
  }
}
.to-top-btn {
  position: fixed;
  bottom: 59px;
  right: 28px;

  transform: rotate(180deg);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  margin-left: auto;

  width: 40px;
  height: 40px;

  background: #0071eb;
  border-radius: 8px;
  cursor: pointer;
  border: 0;

  &::before {
    content: "";
    width: 26px;
    height: 14px;
    background-image: url("data:image/svg+xml,%3Csvg width='26' height='14' viewBox='0 0 26 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.6665 1.16663L12.9998 12.8333L1.33317 1.16663' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }
}
.services-navs {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  left: 0;
  padding: 12px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &__actions {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__data {
    display: flex;
    flex-direction: column;

    margin-right: 10px;
  }

  &__price {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;

    span {
      font-weight: 400;
      text-decoration: line-through;
    }
  }

  &__rating {
    margin-top: 10px;
    font-size: 15px;
    line-height: 17px;

    color: #000000;

    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 14px;
      margin-right: 5px;
      position: relative;
      top: 2px;
      background-image: url("data:image/svg+xml,%3Csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z' fill='%23FAD636'/%3E%3C/svg%3E%0A");
    }

    span {
      color: #0071eb;
    }
  }

  &__send {
    padding: 15px 0px;
    width: 200px;
    height: 47px;

    background: #0071eb;
    border-radius: 7px;

    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    border: 0;
    cursor: pointer;
  }
}
</style>