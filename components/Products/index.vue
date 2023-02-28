<template>
    <div>
        <Parthner />
        <Navbar />

        <div v-for="(item, i) in categories" :key="item" :id="'s' + i" class="glavni">
            <h2>{{ item.name }}</h2>
            <div class="offer-card-wrapper">
                <div v-for="(product, productIndex) in item.items" class="offer-card">
                    <div class="offer-card__photo">
                        <img :src="product.imgPath" alt="" class="offer-card__img" />
                    </div>
                    <div class="offer-card__data">
                        <div class="offer-card__price">{{ product.price }} P</div>
                        <div class="offer-card__name">{{ product.name }}</div>
                        <button v-if="!busket.get(`bx${i}${productIndex}`)" class="offer-card__button"
                            @click="addProduct(product, `bx${i}${productIndex}`)">Добавить</button>
                        <div v-else class="plus-minus">
                            <div @click="busketMinus(`bx${i}${productIndex}`)" class="plus-minus__item">
                                <div style="margin-top: 0">
                                    -
                                </div>
                            </div>
                            <input class="plus-minus__num" type="text" disabled
                                :value="busket.get(`bx${i}${productIndex}`).count" size="5" />
                            <div @click="busketPlus(`bx${i}${productIndex}`)" class="plus-minus__item">
                                <div style="margin-top: 4px">
                                    +
                                </div>
                            </div>
                        </div>
                        <modal v-if="showModal" @close="showModal = false">
                            <div class="m-product">
                                <div class="m-product__left">
                                    <img class="m-product__img" :src="currentProduct.imgPath" alt="">
                                    <div class="m-product__name">{{ currentProduct.name }}</div>
                                </div>
                                <div class="m-product__right">
                                    <div class="m-product__count">х 1</div>
                                    <div class="m-product__price">{{ productPrice }} P</div>
                                </div>
                            </div>
                            <div class="m-options">
                                <div class="m-options__title">{{ currentProduct.options.title }}</div>
                                <div class="m-options__items">
                                    <label class="m-options-item" v-for="(item, i) in currentProduct.options.items">
                                        <div class="m-options-item__label">{{ item.title }}<span>{{ item.price }}
                                                P</span></div>
                                        <input v-model="currentOption" type="radio" name="option" :value="i">
                                    </label>
                                </div>
                            </div>
                            <button slot="footer" @click="addToOrder()" type="submit"
                                class="btn-fixed">Продолжить</button>
                        </modal>
                        <modal v-if="showImg" @close="showImg = null" class="image-modal">
                            <template slot="header">{{ showImg.name }}</template>
                            <img class="image-modal__img" :src="showImg.imgPath" :alt="showImg.name">
                        </modal>
                        <nuxt-link href="/basket" class="total-bx" v-if="busket && busket.getAllSum()">
                            <div class="price">{{ busket.getAllCount() }} Товара | {{ busket.getAllSum() }} P</div>
                            <span class="to-bask">Посмотреть корзину</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import Busket from "~~/src/helpers/busket"
import { updateBusketTwo } from "~~/src/helpers/functions"
import Parthner from "@/components/Parthner"

import Navbar from '@/components/Navbar'
export default {

    data: () => ({
        categories: [
            {
                "name": "Сладкое",
                "items": [
                    {
                        "name": "Сметанник",
                        "price": "46",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/smetannik.webp"
                    },
                    {
                        "name": "Шарлотка",
                        "price": "46",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/applesharlotka.webp"
                    },
                    {
                        "name": "Пирожок с вишней",
                        "price": "43",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokvishnya.webp"
                    },
                    {
                        "name": "Гребешок с яблоком",
                        "price": "29",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/grebeshok-apple.webp"
                    },
                    {
                        "name": "Ягодный мешочек",
                        "price": "43",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/berriesmeshok.webp"
                    },
                    {
                        "name": "Улитка с корицей",
                        "price": "36",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/ulitka.webp"
                    },
                    {
                        "name": "Маковник",
                        "price": "54",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/makovik.webp"
                    },
                ],
            },
            {
                "name": "Пирожки",
                "items": [
                    {
                        "name": "Пирожок с капустой",
                        "price": "24",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokkapusta.webp"
                    },
                    {
                        "name": "Пирожок с яйцом и зеленым луком",
                        "price": "45",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokeggzelen.webp"
                    },
                    {
                        "name": "Пирожок с картофелем и с луком",
                        "price": "31",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokpotatoeszelen2.webp"
                    },
                    {
                        "name": "Эчпочмак",
                        "price": "43",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/echpomak.webp"
                    },
                    {
                        "name": "Пирожок с мясом и капустой",
                        "price": "36",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokmeatkapusta.webp"
                    },
                    {
                        "name": "Хачапури с сыром",
                        "price": "46",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/hachapuri.webp"
                    },
                    {
                        "name": "Пирожок с курицей и сыром",
                        "price": "54",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokchickencheese.webp"
                    },
                    {
                        "name": "Пирожок курочка ряба",
                        "price": "54",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/pirozokryaba.webp"
                    },
                ],
            },
            {
                "name": "Пиццы",
                "items": [
                    {
                        "name": "Пицца большая с курицй и грибами",
                        "price": "250",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
                    },
                    {
                        "name": "Пицца большая с колбасой и грибами",
                        "price": "250",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
                    },
                    {
                        "name": "Пицца с курицей и грибами",
                        "price": "120",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
                    },
                    {
                        "name": "Пицца с колбасой и грибами",
                        "price": "120",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
                    },
                    {
                        "name": "Курица по-польски",
                        "price": "115",
                        "text": "Куриное филе, сыр и помидоры",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/big-classik-pizza.webp"
                    },
                ],
            },
            {
                "name": "Хычины",
                "items": [
                    {
                        "name": "Хычин с мясом",
                        "price": "80",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/meathichin.webp"
                    },
                    {
                        "name": "Хычин с творогом и сыром",
                        "price": "80",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/tvorogcheese.webp"
                    }
                ],
            },
            {
                "name": "Хлебы",
                "items": [
                    {
                        "name": "Хлеб Пшеничный",
                        "price": "28",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/whitebread.webp"
                    },
                    {
                        "name": "Хлеб Чесночный",
                        "price": "35",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/chesnochnii.webp"
                    },
                    {
                        "name": "Хлеб Льняной",
                        "price": "38",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/lnianoy.webp"
                    },
                    {
                        "name": "Багет особый",
                        "price": "30",
                        "text": "",
                        "imgPath": "https://halaleda.ru/uchkeken/gorskipekar/img/baget-special.webp"
                    },
                ],
            }
        ],
        activeCategory: 0,
        currentProduct: null,
        currentProductKey: null,
        currentOption: null,
        showModal: false,
        showImg: null,
        busket: new Busket(),
        activeCityDOMLink: null
    }),
    methods: {
        busketMinus(key) {
            this.busket.delete(key);
            this.$forceUpdate();
            updateBusketTwo();
        },
        busketPlus(key) {
            this.busket.add(key);
            this.$forceUpdate();
            updateBusketTwo();
        },
        addProduct(product, key) {
            this.currentProduct = product;
            this.currentProductKey = key;
            if (this.productHasOptions)
                return this.showModal = true;
            if (this.busket.get(key)) {
                this.busket.add(key);
            }
            else {
                this.busket.firstAdd(key, {
                    name: product.name,
                    count: 1,
                    price: product.price
                });
            }
            this.$forceUpdate();
        },
        addToOrder() {
            const item = this.busket.get(this.currentProductKey);
            const product = this.currentProduct;
            if (this.currentOption !== null && product?.options?.items) {
                const option = product.options.items[this.currentOption];
                if (option) {
                    item.name += ` (${option?.title})`;
                    item.price = option?.price;
                    this.busket.saveToLs();
                }
            }
            this.showModal = false;
        },
    },
    components: { Parthner, Navbar }
}
</script>

<style scoped>
.glavni {
    padding-top: 80px;
}

.offer-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    background: #f5f4f2;
    border-radius: 20px;
    max-width: 180px;
    justify-content: space-between;
}

.offer-card__photo {
    display: flex;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    max-height: 150px;
    border-radius: 20px;
    overflow: hidden;
}

.offer-card__photo img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
}

.offer-card__price {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #000;
}

.offer-card__name {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #000;
}

.offer-card__button {
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding: 10px;
    height: 40px;
    background: #fff;
    border-radius: 25px;
    border: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #000;
    cursor: pointer;
}

.offer-card-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
    grid-column-gap: 15px;
}

.offer-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    background: #f5f4f2;
    border-radius: 20px;
    max-width: 180px;
    justify-content: space-between;
}

.plus-minus {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 5px;
    margin-top: 12px;
}

.plus-minus__item {
    cursor: pointer;
    background: #fff;
    height: 40px;
    font-weight: 500;
    font-size: 30px;
    padding: 0 20px;
}

.plus-minus__num {
    max-width: 40px;
    border: 0;
    background: #fff;
    font-weight: 500;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    color: #000;
}

.total-bx {
    box-sizing: border-box;
    text-decoration: none;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 15px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #20B56C;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}
</style>