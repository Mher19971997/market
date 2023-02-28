<template>
  <div>
    <app-header class="header root__header" />
    <catalog />
    <slot />
    <!-- <app-footer class="footer root__footer" /> -->
  </div>
</template>

<script setup>
import AppHeader from "@/components/Base/AppHeader";
import AppFooter from "@/components/Base/AppFooter";
import Catalog from "@/components/Catalog/";
</script>

<style lang="scss" scoped>
.header {
  margin: 32px 0 40px 0;
}

.footer {
  padding: 15px 0;
}
</style>