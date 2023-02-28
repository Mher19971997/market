<template>
  <div class="partner">
    <Head>
      <title>Где халяль</title>
    </Head>
    <BackButton :color="partner.theme.main_color" />
    <div class="partner__header">
      <img :src="partner.theme.banner" class="partner__cover" />
      <social-buttons :title="partner.name" :contacts="partner.contacts" />
    </div>
    <UiTabs
      class="partner__tabs"
      :tabs="categories.map((c) => c.name)"
      :color="partner.theme.main_color"
    >
      <PartnerOffers :categories="categories" :theme="partner.theme" />
    </UiTabs>
  </div>
</template>
<script setup>
import SocialButtons from "@/components/SocialButtons";
import PartnerOffers from "@/components/cards/food";
import BackButton from "@/components/ui/BackButton";

const route = useRoute();

const { $api } = useNuxtApp();

const { data: partner } = await useAsyncData(() =>
  $api.Partner.getOne(route.params.partner)
);

const { data: offers } = await useAsyncData(() =>
  $api.PartnerOffer.getAll({
    partner: route.params.partner,
  })
);


const collectCategories = (offers) => {
  if (!offers) return [];
  return Object.values(offers)
    .map((offer) => ({
      ...offer.category,
    }))
    .filter(
      (obj, index, self) => self.findIndex((t) => t._id === obj._id) === index
    )
    .map((category) => ({
      ...category,
      items: offers.filter((offer) => offer.category._id == category._id),
    }));
};
const categories = ref(collectCategories(offers.value));
</script>

<style scoped lang="scss">

.partner {
  &__header {
    display: flex;
    align-items: flex-end;
    height: 270px;
    position: relative;
    z-index: 1;
  }
  &__cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  &__tabs {
    margin-top: -5px;
  }
}
</style>
