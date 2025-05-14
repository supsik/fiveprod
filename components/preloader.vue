<template>
  <div class="preloader">
    <h1>пятыйкруг.прод</h1>
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
    z-index: 2;
    margin: auto;
    font-size: 108px;
    font-weight: 400;

    &::after {
      width: 215px;
      height: 135px;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 1;
      display: block;
      content: '';
      background-image: url('/public/img/pigeon.png');
    }
  }
}
</style>