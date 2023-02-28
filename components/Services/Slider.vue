<template>
  <div class="services-slider">
    <div class="services-slider__container" ref="slidesContainer">
      <div
        class="services-slider__slide"
        v-for="(photo, i) in props.photos" 
        :key="i"
        :id="random + i"
      >
        <img
          :src="photo"
          class="services-slider__img"
        />
      </div>
    </div>
    <div class="services-slider__navs">
      <div
        class="services-slider__button services-slider__button--prev"
        @click="toPrevSlide()"
      ></div>
      <div
        class="services-slider__button services-slider__button--next"
        @click="toNextSlide()"
      ></div>
    </div>
    <div class="services-slider__dots">
      <div
        v-for="(_, i) in props.photos"
        :key="i"
        @click="toSlide(i)"
        class="services-slider__dot"
        :class="{
          'services-slider__dot--active': i === activeSlideIndex
        }"
      ></div>
    </div>
  </div>
</template>
  
<script setup>
import { defineProps, ref, onMounted } from "vue";

const random = String(Math.random())

const props = defineProps({
  photos: {
    type: Array,
    required: true,
  },
});

const activeSlideIndex = ref(0)
const slidesContainer = ref('slidesContainer')

const toSlide = index => {
  activeSlideIndex.value = index
  if (activeSlideIndex.value === props.photos.length) activeSlideIndex.value = 0
  if (activeSlideIndex.value === -1) activeSlideIndex.value = props.photos.length -1
  // if (activeSlideIndex.value < 0) activeSlideIndex.value += 3
  slidesContainer.value.children[activeSlideIndex.value].scrollIntoView({
    behavior: 'smooth', inline: 'center' 
  })
}

const toNextSlide = () => toSlide(activeSlideIndex.value + 1)
const toPrevSlide = () => toSlide(activeSlideIndex.value - 1)

onMounted(() => {
  slidesContainer.value.scrollLeft = 0
})
</script>
  
<style lang="scss" scoped>
.services-slider {
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;

  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;

    margin-right: 0px;
    box-sizing: border-box;
    transform-origin: center center;
    transform: scale(1);
    scroll-snap-align: center;
  }

  &__img {
    max-width: 100%;
  }

  &__container {
    display: flex;
    position: relative;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__navs {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;

    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 16px);
    z-index: 7;
  }

  &__button {
    pointer-events: all;
    width: 17px;
    height: 32px;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='32' viewBox='0 0 17 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.41669L1.41667 16L16 30.5834' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    &--next {
      transform: rotate(180deg);
    }
  }

  &__dots {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
  }

  &__dot {
    width: 9px;
    height: 9px;
    margin-right: 6px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 0 2px #000a;

    // &--active {
    //   background: #0071eb;
    // }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>