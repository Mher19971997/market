<template>
  <div class="root">
    <div>
      <app-header class="header root__header" />
    </div>
    <app-footer class="footer root__footer" />
  </div>
</template>

<script setup>
import AppHeader from '@components/Base/AppHeader'
import AppFooter from '@components/Base/AppFooter'
</script>

<style lang="scss">
* {
  font-family: 'GT Eesti Pro Display', sans-serif;
}

body, html {
  padding: 0;
  margin: 0;
}
.root {
  max-width: 430px;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.root {
  &__header {
    margin: 32px 0 40px 0;
  }
  &__footer {
    padding: 15px 0;
  }
}

</style>
