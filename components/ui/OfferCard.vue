<template>
  <!-- offer-card -->
  <div class="offer-card">
    <div class="offer-card__photo">
      <img
        :src="require('/src/assets/imgs/offer.jpg')"
        alt=""
        class="offer-card__img"
      />
    </div>
    <div class="offer-card__data">
      <div class="offer-card__price">570</div>
      <div class="offer-card__name">Раф миндаль</div>
      <div class="offer-card__wt">270 мл</div>
    </div>
    <button class="offer-card__button">Добавить</button>
  </div>
  <!-- end offer-card -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .offer-card{
    display: flex;
    flex-direction: column;
    height: 100%;

    padding: 5px;

    background: #F5F4F2;
    border-radius: 20px;
    
    &__photo{
      display: flex;
      position: relative;

      width: 100%;
      padding-bottom: 100%;
      max-height: 150px;
      border-radius: 20px;

      overflow: hidden;

      img{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__data{
      margin-top: 12px;
    }

    &__price{
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      color: #000000;
    }

    &__name{
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #000000;
    }

    &__wt{
      font-weight: 500;
      font-size: 13px;
      line-height: 25px;
      color: #545454;
    }

    &__button{
      display: flex;
      align-items: center;

      margin-top: 12px;

      padding: 10px;
      height: 40px;

      background: #FFFFFF;
      border-radius: 25px;
      border: 0;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      color: #000000;
      cursor: pointer;
    }
  }

</style>