<template>
  <div class="preloader" ref="preloader">
    <h1>пятыйкруг.прод</h1>
    <img width="180px" src="/svg/discleimer.svg" alt="" srcset="">
  </div>
</template>
<script setup>
const preloader = ref(null)
onMounted(()=> preloader.value.classList.add('preloader--visible'))
</script>
<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: opacity 1s linear;
  font-family: Doloman;
  display: flex;

  &--visible { opacity: 1 }

  h1 {
    display: block;
    position: relative;
    margin: auto;
    font-size: 108px;
    font-weight: 400;

    &::after {
      width: 215px;
      height: 135px;
      right: -155px;
      top: -55px;
      position: absolute;
      z-index: -1;
      display: block;
      content: '';
      background-image: url('/img/pigeon.png');
    }
  }

  img {
    position: absolute;
    left: calc(50% - 90px);
    bottom: 60px;
  }
}
</style>