<template>
  

  <div class="goods-card">
    <div class="goods-card__photo">
      <img
        :src="require('/src/assets/imgs/goods/1.jpg')"
        alt=""
      />
    </div>
    <div class="goods-card__data">
      <div class="goods-card__actions">
        <div class="goods-card__price">2 500 р</div>
        <div class="goods-card__rating">
          <div class="goods-card__rating-list">
            <div class="goods-card__rating-item goods-card__rating-item--checked"></div>
            <div class="goods-card__rating-item goods-card__rating-item--checked"></div>
            <div class="goods-card__rating-item goods-card__rating-item--checked"></div>
            <div class="goods-card__rating-item goods-card__rating-item--checked"></div>
            <div class="goods-card__rating-item"></div>
          </div>
          <div class="goods-card__rating-count">15</div>
        </div>
      </div>
      <div class="goods-card__title">Черный плащ</div>
      <button class="goods-card__button">В корзину</button>
    </div>
    
  </div>

  <div class="goods-card goods-card--inline">
    <div class="goods-card__photo">
      <img
        :src="require('/src/assets/imgs/goods/2.png')"
        alt=""
      />
    </div>
    <div class="goods-card__data">
      <div class="goods-card__title">Черный плащ <span>Bioderma</span> </div>
      <div class="goods-card__price">2 500 р</div>
      <button class="goods-card__button">В корзину</button>
    </div>
  </div>


</template>

<script setup>

</script>

<style lang="scss" scoped>
  .goods-card{
    display: flex;
    flex-direction: column;

    &--inline{
      flex-direction: row;

      .goods-card{
        &__photo{
          max-height: 200px;
          max-width: 150px;
          width: 100%;
          height: 100%;
          margin-right: 15px;
        }

        &__title{
          display: flex;
          flex-direction: column;
          max-width: 190px;

          span{
            color: #0071EB;
          }
        }

        &__data{
          display: flex;
          flex-direction: column;
          justify-content: space-between;


          flex: 1 1 auto;
        }

        &__price{
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;
        }
      }
    }

    &__photo{
      max-height: 279px;

      img{
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__actions{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__price{
      padding-right: 10px;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      color: #000000;
    }

    &__rating{
      display: flex;
      align-items: center;

      &-list{
        display: flex;
        align-items: center;
        
      }

      &-item{
        width: 12px;
        height: 12px;
        display: block;
        flex-shrink: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 0.411865L7.34708 4.55776H11.7063L8.17963 7.12007L9.52671 11.266L6 8.70366L2.47329 11.266L3.82037 7.12007L0.293661 4.55776H4.65292L6 0.411865Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");
      
        &--checked{
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 0.411865L7.34708 4.55776H11.7063L8.17963 7.12007L9.52671 11.266L6 8.70366L2.47329 11.266L3.82037 7.12007L0.293661 4.55776H4.65292L6 0.411865Z' fill='%23FAD636'/%3E%3C/svg%3E%0A");
        }
      }

      &-count{
        margin-left: 10px;
        font-weight: 300;
        font-size: 15px;
        line-height: 17px;
        color: #6D747C;
      }
    }

    &__title{
      margin-top: 5px;
      font-weight: 300;
      font-size: 17px;
      line-height: 20px;
      color: #000000;
    }

    &__button{
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0px;
      gap: 10px;

      width: 100%;
      height: 30px;

      background: #000000;
      border-radius: 5px;

      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
</style>