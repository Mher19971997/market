<template>
  <div class="parthner">
    <div class="partner__header">
      <img src="https://halaleda.ru/assets/bairam.webp" class="partner__img" />
      <SocialButtons/>
    </div>
  </div>
</template>
<script>
import SocialButtons from '@/components/SocialButtons';
import Navbar from '@/components/Navbar';
export default {
  components: {
    SocialButtons,
    Navbar
  }
}
</script>
<style scoped>
.partner__header {
  display: flex;
  align-items: flex-end;
  height: 270px;
  position: relative;
  z-index: 1;
}

.partner__header img {
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
</style>