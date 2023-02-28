<template>
  <div ref="tabsElement">
    <div
      class="tabs-block"
      :class="{ 'tabs-block--sticky': tabIsSticky }"
      ref="tabsHeader"
    >
      <div
        class="tabs-block__item"
        :class="{ 'tabs-block__item--active': tab.active }"
        v-for="(tab, i) in tabs"
        :key="i"
        @click="setActiveTab(tab, i)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div
      ref="containerContent"
      class="tabs-content"
      :class="{ 'tabs-content--padding': tabIsSticky }"
    >
      <template v-for="(slot, i) in slots.default()" :key="i">
        <KeepAlive>
          <component :is="slot" />
        </KeepAlive>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useSlots, ref, defineProps, onMounted } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  scrollContainer: {
    required: false,
  },
  color: {
    default: "#0071eb",
    type: String,
  },
});

const slots = useSlots();
const tabs = ref(
  props.tabs.map((title) => ({
    title,
    active: false,
  }))
);
tabs.value[0].active = true;

const tabsElement = ref();

const containerContent = ref();

const scrollToContent = (tabIndex) => {
  containerContent.value.children[tabIndex].scrollIntoView({
    behavior: "smooth",
  });
};

const tabsHeader = ref();

const setActiveTab = (tab, tabIndex) => {
  tabs.value.forEach((tab) => (tab.active = false));
  tab.active = true;
  scrollToContent(tabIndex);
  tabsHeader.value.children[tabIndex].scrollIntoView({
    behavior: "smooth",
  });
};

const tabIsSticky = ref(false);

const tabsStickyngWatcher = (scrollContainer) => {
  scrollContainer.addEventListener("scroll", (event) => {
    if (!tabsElement.value?.getBoundingClientRect) return;

    const scrollTop = event.target.scrollTop;
    const tabsScrollPosition = tabsElement.value.getBoundingClientRect().top;
    const tabsNotVisible = scrollTop > tabsScrollPosition;

    const tabIsNotSticky = !tabIsSticky.value;
    if (tabsNotVisible && tabIsNotSticky) tabIsSticky.value = true;

    const tabsIsVisible = !tabsNotVisible;
    if (tabsIsVisible && tabIsSticky.value) tabIsSticky.value = false;
  });
};

// const checkElementIsVisible = (parent, element) => {
//   const scrollTop = parent.scrollTop - 305
//   const scrollBottom = scrollTop + parent.clientHeight
//   const rect = element.getBoundingClientRect()
//   return (
//     scrollTop <= rect.top
//     &&
//     scrollBottom >= rect.bottom
//   )
// }

// const onScrollActiveMenuChange = scrollContainer => {
//   scrollContainer.addEventListener('scroll', event => {
//     const tabsContent = containerContent.value.children
//     // for (let i = 0; i < tabsContent.length; i++) {
//     //   if (checkElementIsVisible(event.target, tabsContent[i])) {
//     //     setActiveTab(tabs.value[i], i)
//     //     break
//     //   }
//     // }
//   })
// }

onMounted(() => {
  if (props.scrollContainer) {
    tabsStickyngWatcher(props.scrollContainer);
    // onScrollActiveMenuChange(props.scrollContainer)
  }
});
</script>

<style lang="scss" scoped>
.tabs-block {
  display: flex;
  align-items: center;

  background: #fff;

  padding: 12px 5px;

  overflow: auto;
  border-bottom: 1px solid #f2f2f2;

  border-radius: 10px 10px 0 0;
  z-index: 1;
  position: relative;
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  &--sticky {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Track */
  &::-webkit-scrollbar {
    height: 0.4em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: v-bind(color);
    border-radius: 5px;
  }

  &__item {
    position: relative;
    margin-right: 35px;
    padding-bottom: 12px;

    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    cursor: pointer;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }

    &--active {
      color: v-bind(color);

      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0px;
        width: 100%;
        height: 4px;
        background: v-bind(color);
      }
    }
  }
}
.tabs-content {
  &--padding {
    padding-top: 63px;
  }
}
</style>