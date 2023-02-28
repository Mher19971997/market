<template>
  <div class="goods">
    <div class="goods__header">
      <img :src="require('/src/assets/imgs/goods2.jpg')" class="goods__img" />

      <div class="goods__data">
        <div class="goods__title">Madina tours</div>
        <div class="goods__actions">
          <button class="goods__button" style="color: #000">Позвонить</button>
          <button class="goods__button" style="background: #20b56c">
            Whatsapp
          </button>
          <button class="goods__button" style="background: #0071eb">
            Telegram
          </button>
          <button class="goods__button" style="background: #000">
            Instagram
          </button>
        </div>
      </div>
    </div>

    <div class="goods__content">
      <!-- <div class="goods__tabs">
                <Tabs />
            </div> -->

      <div class="goods__section">
        <div class="goods__section-title">Бермамыт</div>

        <!-- <goods-card class="goods__card" />
                <goods-card class="goods__card" /> -->
      </div>

      <div class="goods__section">
        <div class="goods__section-title">Архыз</div>

        <!-- <goods-card class="goods__card" /> -->
      </div>
    </div>
  </div>
</template>
  
<script setup>
// import GoodsCard from "./GoodsCard"
// import Tabs from "@/ui/Tabs"
</script>
  
<style lang="scss" scoped>
.goods {
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
</style>