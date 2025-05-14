<template>
  <div class="preloader">
    <h1>пятыйкруг.прод</h1>
    <img width="180px" src="/public/svg/discleimer.svg" alt="" srcset="">
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100vh;
  font-family: Doloman;
  display: flex;

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
      background-image: url('/public/img/pigeon.png');
    }
  }

  img {
    position: absolute;
    left: calc(50% - 90px);
    bottom: 60px;
  }
}
</style>