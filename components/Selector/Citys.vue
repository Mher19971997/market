<template>
  <div class="city-selector">
    <div>
      <div class="city-selector__title">Выберите город</div>
      <div class="city-selector__chips">
        <m-chip
          class="city-selector__chip"
          v-for="(city, index) in citys"
          :key="index"
          :active="city.active"
          @click="selectChip(index)"
          >{{ city.name }}</m-chip
        >
      </div>
    </div>
    <m-button class="city-selector__cencel"
      >Отменить</m-button
    >
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import MChip from "@/components/ui/Chip";
import MButton from "@/components/ui/Button";

const props = defineProps({
  cities: {
    required: true,
    type: Object
  }
})
const citys = ref(
  props.cities.map(({ name, alias }) => ({
    name,
    alias,
    active: false,
  }))
);


const emit = defineEmits(["onChoose"]);

const selectChip = (index) => {
  citys.value.forEach((city) => (city.active = false));
  citys.value[index].active = true;
  emit("onChoose", citys.value[index]);
};
</script>

<style lang="scss" scoped>
.city-selector {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    color: #9395ab;
    font-size: 17px;
    margin-bottom: 30px;
  }

  &__chips {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }

  &__cencel {
    display: block;
    width: 100%;
  }
}
</style>