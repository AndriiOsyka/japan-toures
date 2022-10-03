<template>
  <div class="carousel">
    <div class="body-carousel">
      <div class="carousel-slide" :style="{ 'margin-left': '-' + (100 * index) + '%' }">
        <carousel-item
          v-for="slide of slides" :key="slide.id"
          :image="slide" />
      </div>
      <btn-layout class="btn-left"
        :style="'selector-left'"
        @btnClick="changeSlideLeft" />
      <btn-layout class="btn-right"
        :style="'selector-right'"
        @btnClick="changeSlideRight" />
    </div>
  </div>
</template>

<script>
import CarouselItem from './carousel-item.vue'
import BtnLayout from './btn-layout.vue'
export default {
  data () {
    return {
      index: 0
    }
  },
  components: {
    CarouselItem,
    BtnLayout
  },
  props: {
    slides: {
      type: Array
    }
  },
  methods: {
    changeSlideLeft () {
      if (this.index > 0 && this.index <= this.slides.length - 1) {
        this.index--
        return
      }
      if (this.index === 0) {
        this.index = this.slides.length - 1
      }
    },
    changeSlideRight () {
      if (this.index >= 0 && this.index < this.slides.length - 1) {
        this.index++
        return
      }
      if (this.index === this.slides.length - 1) {
        this.index = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.carousel {
  width: 100%;
  height: 100%;
  .body-carousel {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    .carousel-slide {
      display: flex;
      transition: 1s;
    }
    .btn-left {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .btn-right {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
