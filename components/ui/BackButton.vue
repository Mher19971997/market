<template> 
  <div @click="goToPrev()" class="backBtn">
      <svg
        width="15"
        height="22"
        viewBox="0 0 15 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.99099"
          y1="11.9804"
          x2="13.0901"
          y2="1.89033"
          :stroke="color"
          stroke-width="3"
        ></line>
        <line
          x1="2.06066"
          y1="10.0297"
          x2="12.6673"
          y2="20.6363"
          :stroke="color"
          stroke-width="3"
        ></line>
      </svg>
    </div>
</template>

<script setup>
import { defineProps } from "vue"

defineProps({
  color: String
})
const router = useRouter();

const goToPrev = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>


.backBtn {
  position: absolute;
  z-index: 10;
  width: 50px;
  height: 50px;
  background-color: #fff;
  top: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 1px #0002;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  color: #000000;
}
</style>