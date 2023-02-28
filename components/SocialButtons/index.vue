<template>
  <div class="partner__data">
    <div class="partner__title">{{ title }}</div>
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
</template>
<!-- <script>
export default {
  data: () => ({
    buttons:
      [
        {
          "name": "Позвонить",
          "href": "'tel:1231234'",
          "style": "color: rgb(0, 0, 0);"
        },
        {
          "name": "Whatsapp",
          "href": "https://wa.me/",
          "style": "background: rgb(32, 181, 108);"
        },
        {
          "name": "Telegram",
          "href": "https://telegram.me/",
          "style": "background: rgb(0, 113, 235);"
        },
        {
          "name": "Instagram",
          "href": "google.com",
          "style": "background: rgb(0, 0, 0);"
        }

      ]
  })
}
</script> -->

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String
  },
  contacts: {
    required: true,
    type: Object
  }
})

const getContact = name => (
	props.contacts.find(contact => contact.name === name)
)
</script>
<style scoped>
.partner__data {
  padding: 0 15px 35px;
  margin: 0 auto;
}

.partner__title {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 37px;
  line-height: 43px;
  color: #fff;
  text-shadow: 0 0 8px #000a;
}

.partner__actions {
  display: flex;
  align-items: center;
}

.partner__button {
  display: flex;
  padding: 15px 10px;
  background: #fff;
  border-radius: 15px;
  margin-right: 10px;
  border: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
</style>