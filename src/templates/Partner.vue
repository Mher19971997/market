<template>
  <div class="partner" v-if="loadEnded">
    <div class="partner__header">
      <img
        :src="partner.theme.cover"
        class="partner__img"
      />
      <div class="partner__data">
        <div class="partner__title">{{ partner.alias }}</div>
        <div class="partner__actions">
          <a
						class="partner__button"
						style="color: #000"
						v-if="getContact('phone')"
						:href="'tel:' + getContact('phone').value"
					>
						Позвонить
					</a>
          <a
						class="partner__button"
						style="background: #20b56c"
						v-if="getContact('whatsapp')"
						:href="'https://wa.me/' + getContact('whatsapp').value"
						target="_blank"
					>
            Whatsapp
          </a>
          <a
						class="partner__button"
						style="background: #0071eb"
						v-if="getContact('telegram')"
						:href="'https://telegram.me/' + getContact('telegram').value"
						target="_blank"
					>
            Telegram
          </a>
          <a
						class="partner__button"
						style="background: #000"
						v-if="getContact('instagram')"
						:href="getContact('instagram').value"
						target="_blank"
					>
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div class="partner__content">
      <div class="partner__tabs">
        <m-tabs
          v-if="citysOffers"
          :tabs="Object.values(citysOffers).map(c => c.name)"
        >
          <div
            v-for="(city, i) in citysOffers"
            :key="i"
            class="partner__section"
          >
            <div class="partner__section-title">{{ city.name }}</div>
            <partner-card
              v-for="(offer, i) in city.offers"
              :key="i"
              v-bind="{
                ...collectPropsData(offer.attributes),
                price: offer.price,
                ratings: offer.ratings,
                cover: offer.cover
              }"
              class="partner__card"
              @click="activateOffer(offer)"
            />
          </div>
        </m-tabs>
      </div>
    </div>
  </div>
  <!-- <vue-bottom-sheet
    ref="bottomSheet"
  >
    <div class="service-wrapper">
      <services
        v-if="activeOffer"
        style="max-width: 460px; margin: 0 auto"
        @close="bottomSheet.close()"
        :id="activeOffer._id"
        :contacts="partner.contacts"
        @toggleOffer="(offer) => activeOffer = offer"
        class="services"
      />
    </div>
  </vue-bottom-sheet> -->
</template>

<script setup>
import { ref, inject , nextTick} from "vue"
// import { useRoute } from "vue-router";
import Api from "/src/api/"

// import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";

import PartnerCard from "@/Goods/GoodsCard"
import Services from '@/Services/'

// const route = useRoute()

const partner = ref({})
const citysOffers = ref({})
const loadEnded = ref(false)

const activeOffer = ref()
const bottomSheet = ref(null)

const activateOffer = async offer => {
  activeOffer.value = false
  await nextTick()
  activeOffer.value = offer
  bottomSheet.value.open()
}

const collectPropsData = attributes => {
  const offer = {}
  attributes.forEach(attr => {
    offer[attr.name] = attr.value
  })
  return offer
}

const getContact = name => (
	partner.value.contacts.find(contact => contact.name === name)
)

const packUpOffers = offers => {
  let citysOffers = {}
  offers.forEach(offer => {
    if (!citysOffers[offer.city._id]) {
      citysOffers[offer.city._id] = {
        name: offer.city.name,
        offers: []
      }
    }
    citysOffers[offer.city._id].offers.push(offer)
  })
  return citysOffers
}

const parthnerId = inject('PartnerId')

const [partnerData, offers] = await Promise.all([
  Api.Partner.getOne(parthnerId),
  Api.PartnerOffer.getAll({
    partner: parthnerId
  })
])
partner.value = partnerData
// document.title = partner.value.name
citysOffers.value = packUpOffers(offers)
loadEnded.value = true


</script>

<style lang="scss" scoped>
.partner {
  &__header {
    display: flex;
    align-items: flex-end;

    height: 270px;
    position: relative;
    z-index: 1;

    img {
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
  }

  &__data {
    padding: 0 15px 35px;
  }

  &__title {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 37px;
    line-height: 43px;
    color: #ffffff;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__button {
    display: flex;

    padding: 15px 10px;

    background: #ffffff;
    border-radius: 15px;
    margin-right: 10px;
    border: 0;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;

		text-decoration: none;

    &:last-child {
      margin-right: 0;
    }
  }

  &__content {
    position: relative;
    margin-top: -15px;
    padding: 15px 15px 30px 15px;

    background: #fff;
    border-radius: 20px 20px 0px 0px;
    z-index: 5;
  }

  &__tabs {
    margin-bottom: 35px;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 6;
  }

  &__section {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 27px;
      line-height: 31px;
      color: #000000;
    }
  }

  &__card {
    margin-bottom: 45px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.service-wrapper {
  max-height: calc(100vh - 20px) !important;
  overflow: auto;
  /* Track */
  &::-webkit-scrollbar {
    width: 0.4em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0071eb;
    border-radius: 5px;
  }
}
</style>

<style lang="scss">
.bottom-sheet__content {
  border-radius: 10px 10px 0 0 !important;
  height: auto;
}
</style>

<style>
.container {
  max-width: 460px;
  margin: 0 auto;
  position: relative;
  padding: 0 10px;
}
</style>