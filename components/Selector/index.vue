<template>
  <div>
    <div class="selector" @click="citiesIsOpen = !citiesIsOpen">
      <div class="selector__value">
        {{ activeCity.name || "Выберете город" }}
      </div>
      <svg
        class="selector__arrow"
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.707107"
          y1="0.792893"
          x2="5.70711"
          y2="5.79289"
          stroke="black"
          stroke-width="2"
        />
        <line
          y1="-1"
          x2="7.07107"
          y2="-1"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 10 1.5)"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </div>
    <swipe-modal v-model="citiesIsOpen">
      <keep-alive>
        <citys 
          v-if="cities"
          :cities="cities"
          @onChoose="onChooseCity"
        />
      </keep-alive>
    </swipe-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Citys from "./Citys";

const route = useRoute();

const activeCity = ref();

const citiesIsOpen = ref(false);

const routerCity = route.params.city;

const { $api } = useNuxtApp()

const { data:cities } = await useAsyncData(() => $api.City.getAll())

const curentCity = cities.value.find(city => city.alias === routerCity);

if (!curentCity) {
  // Без этогго не открывется модалка
  setTimeout(() => citiesIsOpen.value = true)
}

activeCity.value = curentCity || "Выберите город";

const onChooseCity = async (city) => {
  activeCity.value = city;
  setTimeout(() => citiesIsOpen.value = false, 100);
  await navigateTo({
    path: `/${activeCity.value.alias}`
  });
};
</script>

<style scoped='scoped' lang="scss">
.selector {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &__value {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    margin-right: 15px;
  }
}
</style>