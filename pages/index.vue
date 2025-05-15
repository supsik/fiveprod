<template>
  <div class='main-frame'>
    <transition name="fade" mode="out-in">
      <preloader v-if="openingStore.isOpening"/>
      <div v-else class="content-block">
        <img class="clouds-img" src="/img/clouds.gif" alt="">
        <div class="bottom-block">
          <img class="room-img" src="/img/room1.png" alt="">
          <img class="forest-img" src="/img/forest1.png" alt="">
        </div>
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
<style lang="scss">
.content-block {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.bottom-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;

  .room-img {
    height: 492px;
  }
 }

.clouds-img {
  opacity: .8;
  width: 100%;
  height: 590px;
  object-fit: cover;
}

.fade-enter-active, .fade-leave-active { transition: opacity 1.2s ease-in }
.fade-enter-from, .fade-leave-to { opacity: 0 }
.fade-enter-to, .fade-leave-from { opacity: 1 }
</style>