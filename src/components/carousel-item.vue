<template>
  <div class="carousel-item">
    <img :src="require( '../assets/' + image.code )" alt="img">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.carousel-item {
  transition: 1s;
  width: 320px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
}
@media(min-width: 500px) {
  .carousel-item {
    width: 402px;
    height: 230px;
  }
}
@media(min-width: 600px) {
  .carousel-item {
    width: 490px;
    height: 280px;
  }
}
@media(min-width: 800px) {
  .carousel-item {
    width: 660px;
    height: 380px;
  }
}
</style>
