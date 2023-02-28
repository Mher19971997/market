<template>
  <nuxt-link href="./" class="back">
    <img
      :src="require('/src/assets/imgs/back.svg')"
      alt=""
    />
    <span>Корзина</span>
  </nuxt-link>
  <div class="logo-bx logo-bx-inner">
    <div class="logo">
      <img
        :src="require('/src/assets/imgs/logo.png')"
        width="50"
        alt=""
      />
    </div>
    <div class="tt">
      <div class="t1">Суши Байрам</div>
      <div class="t2">Суши</div>
    </div> 
  </div>
  
  <form action="#" class="send">
    <div class="basket-bx">
      <div class="bx">
        <ul class="basket-list">
        </ul>
        <div class="sep"></div>
        <input type="text" placeholder="Комментарий" class="comment">
      </div>
      <div class="bx" style="background: none;">
        <div class="form-error" style="display: none;"></div>
        <select class="select" required style="margin-bottom: 10px;">
          <option data-price="0" data-from-price="0" data-free-price="0" value="">Выбирите город</option>
          <option data-price="200" data-from-price="500" data-free-price="900" value="Ерасный Восток">Красный Восток</option>
          <option data-price="150" data-from-price="100" data-free-price="1350" value="Мыхал">Мыхал</option>
          <option data-price="90"  data-from-price="300" data-free-price="800" value="Терезе">Терезе</option>
          <option data-price="50" data-from-price="100" data-free-price="150" value="Первомайское">Первомайское</option>
          <option data-price="1" data-from-price="400" data-free-price="1800" value="Учкекен">Учкекен</option>
          <option data-price="50" data-from-price="200" data-free-price="1500" value="Римгорка">Римгорка</option>
          <option data-price="50" data-from-price="300" data-free-price="900" value="Джага">Джага</option>
          <option data-price="100" data-from-price="100" data-free-price="300" value="Конзавод">Конзавод</option>
          <option data-price="150" data-from-price="400" data-free-price="890" value="Мирный">Мирный</option>
          <option data-price="200" data-from-price="300" data-free-price="640" value="Кисловодск">Кисловодск</option>
        </select>
        <input type="text" class="street" placeholder="Улица*" required>
      </div>
      <div class="bx">
        <div class="h3">Чек</div>
        <div class="sep"></div>
        <ul class="basket-list">
          <li>
            <div class="name">Итого в корзине</div>
            <div class="price res">189 P</div> 
          </li>
          <li>
            <div class="name">Стоимость доставки</div>
            <div class="price res3">189 P</div> 
          </li>
          <li>
            <div class="name">Итого к оплате</div>
            <div class="price res2">189 P</div> 
          </li>
        </ul>
      </div>
    </div>

    <button type="submit" class="btn-fixed">Заказать через Whatsapp</button>
  </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .basket-bx{
    padding: 15px;
    margin: 0 -15px;
    background: #F4F4F4;
  }
  .basket-bx .bx{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .basket-bx .sep{
    border-top: 1px solid #F6F6F6;
  }
  .basket-list {
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 20px 15px;
  }
  .basket-list li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .basket-list li:last-child{
    margin-bottom: 0;
  }
  .basket-list .name{
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  .basket-list .right{
    display: flex;
    align-items: center;
  }
  .basket-list .price{
    width: 70px;
    text-align: center;
    margin-left: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
  .basket-bx select{
    background: #fff url('/src/assets/imgs/down-arrow-svgrepo-com.svg') 97% 50% / 12px no-repeat;
    webkit-appearance: none;/* Chrome */
    -moz-appearance: none;/* Firefox */
    appearance: none;/* убираем дефолнтные стрелочки */
  }
  .basket-bx select,
  .basket-bx input[type='text']{
    padding: 12px 15px;
    border: 0;
    outline: 0;
    height: 42px; 
    border-radius: 7px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000;
    
  }
  input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
  input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
  input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
  input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
  input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
  input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
  input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
  ::-webkit-input-placeholder {
  color:#6C757D;}
  :-moz-placeholder {
  color:#6C757D;}
  ::-moz-placeholder {
  color:#6C757D;}
  :-ms-input-placeholder {  
  color:#6C757D;}
  .basket-bx .h3{
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    padding: 12px 15px;
    color: #000000;
  }

  .btn-fixed{
    background: #20B56C;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 50px;
    justify-content: center;
    color: #FFFFFF;
    text-decoration: none;
    // position: fixed;
    z-index: 5;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 0;
    cursor: pointer;
  }

  .logo-bx {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .logo-bx .tt{
    width: 150px;
    margin-right: auto;
    margin-left: 15px;
  }
  .logo-bx .t1{
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 3px;
    color: #000000;
  }
  .logo-bx .t2{
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #6D747C;
  }

  .back{
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    color: #000000;
  }
  .back img{margin-right: 20px;}
</style>