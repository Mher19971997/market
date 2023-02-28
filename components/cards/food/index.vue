<template>
  <div class="categories">
    <div v-for="(category, i) in props.categories" :key="i" class="category">
      <div class="category__title">
        {{ category.name }}
      </div>
      <div class="category__content" v-if="basket">
        <div v-for="(offer, i) in category.items" :key="i">
          <Card
            v-if="getItemInbasketById(offer._id)"
            :title="offer.name"
            :price="offer.price"
            :cover="offer.cover"
            v-model="getItemInbasketById(offer._id).numbers"
            @update:modelValue="saveBasketToLS"
            class="category__card"
          />
        </div>
      </div>
    </div>
    <nuxt-link
      v-if="basket.filter((item) => item.numbers).length"
      :to="{
        name: 'city-partner-basket',
        params: { partner: route.params.partner },
      }"
      class="to-basket"
    >
      <div class="to-basket__price">
        {{ basket.filter((item) => item.numbers).length }} Товара |
        {{ getSumPrice() }} P
      </div>
      <span class="to-basket__btn">Посмотреть корзину </span>
    </nuxt-link>
  </div>
</template>

<script setup>
import Card from "./card";

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
  theme: {
    type: Object,
  },
});

const route = useRoute();

let LSBasketData;
try {
  LSBasketData = JSON.parse(
    localStorage.getItem("basket." + route.params.partner)
  );
} catch (error) {}
const basketData = props.categories.reduce((acc, category) => {
  const items = category.items.map((item) => ({
    name: item.name,
    price: item.price,
    numbers: 0,
    id: item._id,
  }));
  return (acc = [...acc, ...items]);
}, []);

const basket = ref(LSBasketData || basketData);

const getItemInbasketById = (itemId) => {
  const item = basket.value.find((item) => item.id === itemId);
  if (!item) return;
  return item;
};

const getSumPrice = () => {
  return basket.value.reduce(
    (acc, item) => (acc += item.numbers * item.price),
    0
  );
};

const saveBasketToLS = () =>
  localStorage.setItem(
    "basket." + route.params.partner,
    JSON.stringify(basket.value)
  );

const main_color = props.theme.main_color;
</script>

<style lang="scss" scoped>
.category {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  &__title {
    font-weight: 700;
    font-size: 23px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 15px;
  }
  &__content {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
    grid-column-gap: 15px;
  }
  padding-bottom: 65px;
}

.to-basket {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: v-bind(main_color);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  > * {
    padding: 0 15px;
  }
}
</style>