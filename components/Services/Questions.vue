<template>
  <div class="services-questions">
    <div
      v-for="(question, i) in questions"
      :key="i"
      class="services-questions__item"
    >
      <div
        @click="toggleQuestion(question)"
        class="services-questions__title"
        :class="{'services-questions__title--active': question.active}"
      >
        {{ i + 1 }}. {{ question.question }}
      </div>
      <div
        v-show="question.active"
        class="services-questions__text"
      >
        {{ question.answer }}
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
});

const questions = ref(
  props.questions.map(q => (
    {
      ...q,
      active: false
    }
  ))
)

const toggleQuestion = question => {
  if (!question.active)
    questions.value.forEach(q => q.active = false)
  question.active = !question.active
}
</script>
  
<style lang="scss" scoped>
.services-questions {
  &__item {
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    display: flex;
    align-items: center;

    cursor: pointer;

    padding: 10px 0;

    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #000000;

    &::after {
      content: "";
      width: 18px;
      height: 10px;
      display: block;
      margin-left: auto;
      flex-shrink: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 1.10999L9.22 8.88999L1.44 1.10999' stroke='%230071EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      transition: all .2s;
    }

    &--active {
      &::after {
        transform: rotate(180deg)   
      }
    }
    
  }
}
</style>