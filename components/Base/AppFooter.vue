<template>
  <div>
    <m-button
      @click="showModal = !showModal"
      class="footer-btn"
    >
      Хочу разместить заведение
    </m-button>
    <swipe-modal
      v-model="showModal"
      border-top-radius="16px"
      class="footer-modal"
    >
      <form action="#" @submit="sendRequest" class="footer-modal__form footer-form">
        <div class="footer-form__title">Хочу разместить заведение</div>
        <m-input v-model="cafeName" class="footer-form__input footer-form__element" placeholder="Название вашего кафе" required />
        <m-button type="submit" class="footer-form__send footer-form__element">Отправить заявку</m-button>
      </form>
    </swipe-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MButton from "@/components/ui/Button"
import MInput from "@/components/ui/Input"


const showModal = ref(false)
const cafeName = ref("")

const sendRequest = e => {
  e.preventDefault()
  const br = `%0a‎`
  let textMsg = `
    Ас-саля́му але́йкум. Хочу разместить кафе в каталоге Halal Eda ${br} ${br}
    Мое кафе: ${cafeName.value} ${br}
  `
  const toPhone = "+79222524966"
  // window.open(
  //   `https://wa.me/${toPhone}?text=${textMsg}`,
  //   '_blank'
  // );
  showModal.value = false;
}
</script>

<style lang="scss" scoped>
.footer-btn {
  width: 100%;
}
.footer-modal {
  &__form {
    padding: 0 15px;
  }
}
.footer-form {
  &__title {
    font-weight: 500;
    text-align: center;
    font-size: 24px;
    padding: 10px 0;
  }
  &__element {
    margin: 10px 0;
  }
  &__send {
    width: 100%;
  }
}
</style>