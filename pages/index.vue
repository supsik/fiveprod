<template>
  <div class='main-frame'>
    <transition name="fade" mode="out-in">
      <preloader v-if="openingStore.isOpening"/>
      <div v-else class="content">
        
      </div>
    </transition>
  </div>
</template>
<script setup>
const openingStore = useMainStore()

onMounted(() => {
  // setTimeout(() => openingStore.setOpening(false), 3500); // prod
})
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s ease-in;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>