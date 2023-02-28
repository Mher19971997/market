<template>
  <div class="basket">
    <Head>
      <title>Где халяль</title>
    </Head>
    <BackButton :color="partner.theme.main_color" />
    <div class="basket__logo-block logo-block">
      <img
        class="logo-block__img"
        src="https://halaleda.ru/img/hashus.webp"
        width="50"
        alt=""
      />
      <div class="logo-block__titles">
        <div class="logo-block__title">{{ partner.name }}</div>
        <div class="logo-block__subtitle">{{ partnerCategories }}</div>
      </div>
    </div>
    <form action="#" class="send">
      <div class="basket__content content">
        <div class="content__block">
          <div
            v-for="(item, i) in basket"
            :key="i"
            class="content__item content__item--title"
          >
            <div class="content__text">{{ item.name }}</div>
            <div style="display: flex; align-items: center">
              <div class="content__plus-minus plus-minus">
                <span class="plus-minus__btn" @click="minusItem(item._id)"
                  >-</span
                >
                <span class="plus-minus__input">{{ item.numbers }}</span>
                <span class="plus-minus__btn" @click="plusItem(item._id)"
                  >+</span
                >
              </div>
              <div class="content__price">
                {{ item.numbers * item.price }} P
              </div>
            </div>
          </div>
          <textarea
            class="content__comment"
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div
          class="content__block"
          style="margin-top: 5px; margin-bottom: 0"
          :class="{ redBorder: !activeCity }"
        >
          <div class="content__item">
            <select
              class="content__select"
              :required="true"
              v-model="activeCity"
            >
              <option :value="null">Выберите город</option>
              <option v-for="(city, i) in deliveryTable" :key="i" :value="city">
                {{ city.name }}
              </option>
            </select>
          </div>
        </div>
        <div
          class="content__block"
          style="margin-top: 10px"
          :class="{ redBorder: !street }"
        >
          <div class="content__item">
            <input
              type="text"
              class="content__input"
              v-model="street"
              required
              placeholder="Улица*"
            />
          </div>
        </div>
        <div class="content__block" v-if="activeCity">
          <div class="content__item content__item--title">Чек</div>
          <div class="content__item" style="margin-top: 20px">
            <span>Итого в корзине</span>
            <span> {{ productSum }} Р </span>
          </div>
          <div class="content__item">
            <span>Стоимость доставки</span>
            <span>{{ deliveryPrice }} Р</span>
          </div>
          <div class="content__item" style="margin-bottom: 10px">
            <span>Итого к оплате</span>
            <span>{{ resultPrice }} Р</span>
          </div>
        </div>
      </div>
      <button @click="go" type="submit" class="basket__pay-btn">
        Заказать через Whatsapp
      </button>
    </form>
  </div>
</template>

<script setup>
import BackButton from "@/components/ui/BackButton";

const route = useRoute();

const { $api } = useNuxtApp();

// const {data:menuItems} = await
//   useAsyncData(() => $api.Category.getAll())

const { data: partner } = await useAsyncData(() =>
  $api.Partner.getOne(route.params.partner)
);

const partnerMainColor = partner.value.theme.main_color;
const partnerCategories = ref(
  partner.value.categories
    .slice(0, 2)
    .map((c) => c.name)
    .join(", ")
);

const deliveryTable = ref(
  partner.value.attributes.find((attr) => attr.alias == "delivery_table").value
);

const activeCity = ref(null);
const street = ref(null);

let LSBasketData;
try {
  LSBasketData = JSON.parse(
    localStorage.getItem("basket." + route.params.partner)
  );
  console.log(LSBasketData);
} catch (error) {
  navigateTo({
    name: "city-partner",
    params: { partner: route.params.partner },
  });
}

const basket = ref(LSBasketData);

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

const plusItem = (id) => {
  const item = basket.value.find((i) => i._id == id);
  if (!item) return;
  item.numbers++;
  saveBasketToLS();
};

const minusItem = (id) => {
  const item = basket.value.find((i) => i._id == id);
  if (!item) return;
  if (item.numbers <= 0) {
    basket.value.pop(basket.value.findIndex((i) => (i._id = i)));
    if (basket.value.length === 0)
      navigateTo({
        name: "city-partner",
        params: { partner: route.params.partner },
      });
    saveBasketToLS();
    return;
  }
  item.numbers--;
  saveBasketToLS();
};

const productSum = computed(() =>
  basket.value.reduce((acc, val) => acc + val.price * val.numbers, 0)
);

const deliveryPrice = computed(() => {
  if (productSum.value >= activeCity.value.free_delivert_start_price) return 0;
  return activeCity.value.price;
});

const resultPrice = computed(() => productSum.value + deliveryPrice.value);

const go = (e) => {
  e.preventDefault();

  const phone = partner.value.contacts.find(
    (item) => item.name === "whatsap"
  ).value;
  let t = "";
  Object.values(basket.value).forEach((item, i) => {
    t += `${item.name} - ${item.numbers * item.price} за ${item.numbers} шт. `;
  });
  if (activeCity.value.name && street.value) {
    const text = `Заказ из HalalEda.ru: ${t}Доставка по адресу: Г. ${
      activeCity.value.name
    } Ул. ${street.value} Стоимость доставки: ${
      deliveryPrice.value
    } Р Комментарий: Итого: ${getSumPrice()} Р

`;
    window.open(`https://wa.me/${phone}?text=${text}`);
  }
};
</script>

<style lang="scss" scoped>
.redBorder {
  border: 1px solid red;
}
.basket {
  &__logo-block {
    margin-top: 10px;
  }
  &__content {
    padding: 15px;
    margin: 0 0px;
    background: #f4f4f4;
  }
  &__pay-btn {
    background: #0071eb;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 50px;
    justify-content: center;
    color: #ffffff;
    text-decoration: none;
    position: fixed;
    z-index: 5;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 0;
    cursor: pointer;
  }
}
.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  &__img {
    margin-right: 50px;
  }
  &__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 3px;
    color: #000000;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #6d747c;
  }
}
.content {
  &__block {
    background: #ffffff;
    border-radius: 5px;
    padding: 12px 15px 5px 15px;
    margin-bottom: 30px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &--title {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 0;
      padding: 12px 0 15px 0;
      color: #000000;
      border-bottom: 2px solid #f6f6f6;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  &__price {
    margin-left: 10px;
    font-weight: 500;
    font-size: 15px;
    min-width: 50px;
  }
  &__comment {
    width: 100%;
    padding-top: 12px;
    border: 0;
    outline: 0;
    width: 100%;
    border-radius: 7px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000;
    vertical-align: text-bottom;
    height: 23px;
    resize: none;
  }
  &__select {
    border: 0;
    outline: 0;
    width: 100%;
    border-radius: 7px;
    font-weight: 500;
    margin-bottom: 7px;
    font-size: 15px;
    line-height: 0;
    color: #000;
  }
  &__input {
    border: 0;
    outline: 0;
    width: 100%;
    border-radius: 7px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000;
  }
}
.plus-minus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 3px;
  width: 80px;
  height: 28px;
  &__btn {
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #000000;
    cursor: pointer;
    height: 28px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__input {
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
