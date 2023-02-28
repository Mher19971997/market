<template>
  <div class="catalog">
    <app-menu @selectCategory="onSelectCategory" />
    <m-input class="catalog__search" v-model="searchString" UIType="search" placeholder="Поиск сельскохозяйственных услуг" />
    <div v-if="partners" class="cardsBg">
      <cafe-card class="catalog__card" v-for="(parthner, i) in partners" :key="i" @click="
        navigateTo({
          
        })
      " :banner="parthner.banner" 
        :title="parthner.name"
        :subtitle="parthner.free_delivery_price" 
        :comment="parthner.delivery_time_string"
        :rating="parthner.rating" 
        :marksNum="parthner.reviews.length" />
      <div v-if="!partners.length" class="catalog__empty">
        По указанным параметрам не нашлось ни одного заведения
      </div>
    </div>
  </div>
</template>

<script setup>
import fuzzysort from "fuzzysort";

import { ref, computed } from "vue";
// import { useRoute } from "vue-router"

import AppMenu from "@/components/Menu";
import CafeCard from "@/components/Catalog/Card";
import MInput from "../ui/Input";

const activeCategory = ref(false);

// const onSelectCategory = (category) => (activeCategory.value = category);

const searchString = ref("");

// const filterByString = (partners) => {
//   if (!searchString.value) return partners;
//   const searchResults = fuzzysort.go(searchString.value, partners, {
//     key: "name",
//   });
//   if (!searchResults.length) return searchResults;
//   return searchResults.map((r) => r.obj);
// };

const route = useRoute();

const collectAttributtes = (attrs) => {
  if (!attrs) return {};
  let result = {};
  if (!Object.keys(attrs)?.forEach) return {};
  Object.values(attrs).forEach((attr) => {
    result[attr.alias] = attr.value;
  });
  return result;
};

const collectPartners = async () => {
  const businessCategory = "food";
  const routeCategory = route.query.category || "";

  const { $api } = useNuxtApp();

  let { data: partnersResponse } = await useAsyncData(() => $api.Partner.getAll({
    categories: [businessCategory, routeCategory],
    city: route.params.city
  }));

  return partnersResponse.value.map((partner) => ({
    name: partner.name,
    alias: partner.alias,
    cardType: partner.theme.card_type,
    banner: partner.theme.banner,
    rating: partner.rating,
    reviews: partner.reviews,
    ...collectAttributtes(partner.attributes),
  }));
  return partners.value;
};

const partners = ref([]);
watch(
  () => [route.path, route.query, searchString.value],
  async () => {
    partners.value = filterByString(await collectPartners());
  }
);

partners.value = await collectPartners();
</script>

<style lang="scss" scoped>
.cardsBg {
  background-image: url('/bg-cards.png');
  padding: 10px 15px;
}

.catalog {
  &__search {
    margin: 25px 0;
  }

  &__card {
    margin: 10px 0;
    padding: 10px 15px;
    height: 286px;
    background: #FFFFFF;
    border-radius: 15px 15px 15px 0px;
  }
}
</style>