<template>
  <div class="menu">
    <menu-item
      v-for="(item, i) in menuItems"
      @click="selectCategory(item.alias)"
      :key="i"
      :name="item.name"
      :img="item.cover"
    />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

import MenuItem from "./Item";

const { $api } = useNuxtApp();

const { data: menuItems } = await useAsyncData(() => $api.Category.getAll());

const emit = defineEmits(["selectCategory"]);
const router = useRouter();
const selectCategory = (category) => {
  emit("selectCategory", category);
  router.push({
    query: {
      category,
    },
  });
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 7px;
  justify-content: space-between;
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
</style>