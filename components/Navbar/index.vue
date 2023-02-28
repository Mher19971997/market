<template>
  <div class="nav-spacer" ref="busstop">
    <!-- <ul :class="this.top ? 'nav fixed' : 'nav'">
      <li v-for="(item, i) in menuItems" :key="item">
        <nuxt-link :href="'#s' + i" :class="item">
          {{ item }}
        </nuxt-link>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    menuItems: ["Сладкое", "Пирожки", "Пиццы", "Хычины", "Хлебы"],
    top: false,
  }),
  methods: {
    handleScroll() {
      this.elTop = this.$refs?.busstop?.getBoundingClientRect();
      // if (this.elTop.top <= 0) {
      //   this.top = true;
      // } else {
      //   this.top = false;
      // }
    },
  },
  created() {
    if (process.client) {
      // window.addEventListener('scroll', this.handleScroll);
    }
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  margin: 0;
  padding: 0px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  list-style: none;
  overflow: auto;
  width: 98.9%;
  padding-bottom: 5px;
  scroll-behavior: smooth;
}

.nav.fixed {
  left: 0;
  top: 0;
  position: fixed;
  padding: 5px 2px 10px;
  background: #fff;
  width: 100%;
  z-index: 5;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 5px 0px rgb(0 0 0 / 10%);
}

.nav li {
  margin: 0 17px;
}

.nav a {
  display: block;
  padding: 12px 0 8px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  transition: 0.3s ease all;
}
</style>