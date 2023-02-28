<template>

    <div class="review-card">
        <div class="review-card__author">{{ review.name }}, {{ review.date }}</div>
        <stars
            :value="review.value"
        />
        <div class="review-card__text">
            {{ review.text }}
        </div>
    </div>
        
</template>
  
<script setup>
import { defineProps } from "vue"

import Stars from "./RatingStars"

defineProps({
    review: {
        type: Object,
        required: true
    }
})
</script>
  
<style lang="scss" scoped>
    .review-card{
        padding-top: 15px;

        &__author{
            font-weight: 500;
            font-size: 15px;
            line-height: 17px;
            color: #6D747C;
        }

        &__rating{
            display: flex;
            align-items: center;

            margin: 15px 0 0 0;
            padding: 0;
            list-style-type: none;

            &-item{
                display: flex;
                flex-shrink: 0;
                width: 17px;
                height: 16px;
                background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");
                
                &--checked{
                    background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z' fill='%23FAD636'/%3E%3C/svg%3E%0A");
                }
            }
        }

        &__text{
            margin-top: 15px;
            font-weight: 500;
            font-size: 15px;
            line-height: 17px;
            color: #000000;
        }
}
</style>