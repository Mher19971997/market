<template>
  <div class="product-modal">
    <div class="product-modal__close"></div>
    <div class="product-modal__preview">
      <div class="product-modal__photo">
        <img
          :src="require('/src/assets/imgs/product.png')"
          alt=""
        />
      </div>
      <div class="product-modal__title">Чай Зеленый</div>
      <div class="product-modal__data">
        <div class="product-modal__qt">х 1</div>
        <div class="product-modal__price">189 ₽</div>
      </div>
    </div>

    <div class="product-modal__body">
      <div class="product-modal__section">
        <div class="product-modal__caption">Размер</div>

        <div class="product-modal__group">
          <input type="radio" id="r1" name="product-modal" checked>
          <label for="r1">Маленький</label>
        </div>
        <div class="product-modal__group">
          <input type="radio" id="r2" name="product-modal">
          <label for="r2">Средний <span>50 ₽</span></label>
        </div>
        <div class="product-modal__group">
          <input type="radio" id="r3" name="product-modal">
          <label for="r3">Большой <span>150 ₽</span></label>
        </div>
      </div>
    </div>

    <div class="product-modal__button">Заказать через Whatsapp</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .product-modal{
    position: relative;
    padding: 20px 20px 53px;
    background: #fff;
    min-height: 100vh;

    &__close{
      margin: 20px 0 20px;
      width: 24px;
      height: 24px;
      margin-left: auto;
      cursor: pointer; 
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='3.12132' y1='2' x2='22.2132' y2='21.0919' stroke='black' stroke-width='3' stroke-linecap='round'/%3E%3Cline x1='1.78711' y1='21.0921' x2='20.879' y2='2.00017' stroke='black' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A");
    }

    &__preview{
      display: flex;
      align-items: center;

      padding: 20px 0;

      border-bottom: 1px solid #CACACA;
    }

    &__photo{
      margin-right: 10px;
      flex-shrink: 0;
      max-width: 72px;
      overflow: hidden;
      border-radius: 10px;
    }

    &__title{
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
    }

    &__data{
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    &__qt{
      margin-right: 20px;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
    }

    &__price{
      padding-right: 10px;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      color: #20B56C;
    }

    &__body{
      margin-top: 40px;
    }

    &__caption{
      display: inline-flex;
      margin-bottom: 25px;
      padding: 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #000000;

      border: 1px solid #C5C5C5;
    }

    &__group{
      margin-bottom: 29px;

      input {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
      }

      input:checked + label:after {
        content: '';
        transition: 0.5s;
        background-image: url("data:image/svg+xml,%3Csvg width='38' height='39' viewBox='0 0 38 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19.2134' r='18' stroke='%23BCBCBC' stroke-width='2'/%3E%3Ccircle cx='19.5' cy='19.7134' r='7.5' fill='%2320B56C'/%3E%3C/svg%3E%0A");
      }

      label{
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #000000;

        span{
          margin-left: 5px;
          color: #939297;
          font-weight: 400;
        }


        &:after{
          content:'';
          display: block;
          width: 38px;
          height: 39px;
          margin-left: auto;
          flex-shrink: 0;
          border-radius: 50%;
          transition: 0.5s;
          background-image: url("data:image/svg+xml,%3Csvg width='38' height='39' viewBox='0 0 38 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19.2134' r='18' stroke='%23BCBCBC' stroke-width='2'/%3E%3C/svg%3E%0A");
        }
      }
    }

    &__button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 15px;

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 53px;

      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;

      background: #20B56C;
      border-radius: 5px;
      cursor: pointer;
    }
  }

</style>