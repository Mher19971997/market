<template>
  <div>
    <m-button @click="showModal = !showModal" class="footer-btn">
      <img src="/fi_edit-3.png" alt="" />
      | Опубликовать объявление
    </m-button>
    <div v-if="showModal" class="footer-modal">
      <form
        action="#"
        @submit="step === 6 && sendRequest"
        class="footer-modal__form footer-form"
      >
        <div class="footer-form__title">Добавить объявление</div>
        <div>
          <span>Название</span>
          <m-input
            v-model="cafeName"
            class="footer-form__input footer-form__element"
            placeholder="Название объявления"
            required
          />
        </div>
        <div v-if="step > 1">
          <span>Категория</span>
          <m-dropdown
            v-model="cafeName"
            class="footer-form__input footer-form__element"
            placeholder="Выберите категорию"
            required
          />
        </div>
        <div v-if="step > 2">
          <span>Описание</span>
          <m-textarea aria-placeholder="Введите описание"></m-textarea>
        </div>
        <div v-if="step > 3">
          <span>Фото</span>
          <m-file
            v-model="cafeName"
            class="footer-form__input footer-form__element"
            placeholder="Выберите категорию"
            required
          />
        </div>
        <div class="footer-form__price_locat" v-if="step > 4">
          <div>
            <span>Цена</span>
            <m-input
              v-model="cafeName"
              class="footer-form__input footer-form__element"
              placeholder="Цена"
              type="number"
              required
            />
          </div>
          <div>
            <span>Местоположение</span>
            <m-input
              v-model="cafeName"
              class="footer-form__input footer-form__element"
              placeholder="Местоположение"
              required
            />
          </div>
        </div>
        <div v-if="step > 5">
          <span>Телефон c WhatsApp </span>
          <m-input
            v-model="cafeName"
            class="footer-form__input footer-form__element"
            placeholder="+79283550302"
            type="number"
            required
          />
        </div>
        <m-button
          type="submit"
          @click="if (step < 6) step++;"
          class="footer-form__send footer-form__element"
          v-if="step < 6"
          >Продолжить</m-button
        >
        <m-button
          type="submit"
          class="footer-form__send footer-form__element"
          v-if="step === 6"
          >Опубликовать</m-button
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MButton from "@/components/ui/Button";
import MInput from "@/components/ui/Input";
import MDropdown from "@/components/ui/Dropodown";
import MTextarea from "@/components/ui/TextArea";
import MFile from "@/components/ui/File";

const showModal = ref(false);
const cafeName = ref("");
const step = ref(1);

const sendRequest = (e) => {
  e.preventDefault();
  const br = `%0a‎`;
  let textMsg = `
    Ас-саля́му але́йкум. Хочу разместить кафе в каталоге Halal Eda ${br} ${br}
    Мое кафе: ${cafeName.value} ${br}
  `;
  const toPhone = "+79222524966";
  // window.open(
  //   `https://wa.me/${toPhone}?text=${textMsg}`,
  //   '_blank'
  // );
  showModal.value = false;
};
</script>

<style lang="scss" scoped>
.footer-btn {
  width: 100%;
  color: #d9d9d9;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  cursor: text;
  background-color: #ffff;
}

.footer-modal {
  width: 430px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  overflow-y: scroll;
  max-height: 100%;
  // min-height: 100vh;

  &__form {
    padding: 0 15px;
  }
}

.footer-form {
  &__price_locat {
    display: flex;
    justify-content: space-between;
  }

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
    background-color: #654321;
  }
}
</style>
