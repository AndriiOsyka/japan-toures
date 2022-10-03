<template>
  <div class="home-layout">
    <div class="cards-carousel">
      <h3>Benefits of Odigo</h3>
      <div class="cards">
        <cart-layout
          class="card"
          :icon="'fa-solid fa-bars'"
          :header="'Welcome to Odigo!'"
          :text="'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over.'" />
        <cart-layout
          class="card"
          :icon="'fa-solid fa-face-smile'"
          :header="'Your Personal Japan Guide'"
          :text="'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over.'" />
        <cart-layout
          class="card"
          :icon="'fa-solid fa-city'"
          :header="'Promoting Local Businesses'"
          :text="'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over.'" />
      </div>
    </div>
    <banners v-if="banner"
    :images="pictures" />
    <div
      v-if="!banner"
      class="carousel-block" >
        <carousel
        :slides="pictures" />
    </div>
  </div>
</template>

<script>
import CartLayout from './cart-layout.vue'
import Banners from './banners.vue'
import Carousel from './carousel.vue'
export default {
  data () {
    return {
      pictures: [
        {
          code: 'picture1.jpg',
          id: 0
        },
        {
          code: 'picture2.jpg',
          id: 1
        },
        {
          code: 'picture3.jpg',
          id: 2
        },
        {
          code: 'picture4.jpg',
          id: 3
        },
        {
          code: 'picture5.jpg',
          id: 4
        }
      ],
      banner: false
    }
  },
  components: {
    CartLayout,
    Banners,
    Carousel
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      if (window.innerWidth > 950) {
        this.banner = true
      }
      if (window.innerWidth < 950) {
        this.banner = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/style.scss';

.home-layout {
  position: relative;
  top: -40px;
  background: $color-white;
  .carousel-block {
    width: 340px;
    max-width: 800px;
    height: 200px;
    margin: 0 auto;
    padding: 10px;
  }
  .cards-carousel {
    padding: 90px 100px;
    box-shadow: 0px 2px 20px 0px $color-shadow;
    max-width: 1262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 131px;
    h3 {
      text-align: center;
      color: $color-black;
      font-size: 35px;
      line-height: 42px;
      font-weight: 500;
      margin-bottom: 120px;
    }
    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .card {
        margin: 0 auto 80px;
      }
    }
  }
}
@media(min-width: 500px) {
  .home-layout {
    .carousel-block {
      width: 422px;
      height: 250px;
    }
  }
}
@media(min-width: 600px) {
  .home-layout {
    .carousel-block {
      width: 510px;
      height: 300px;
    }
  }
}
@media(min-width: 800px) {
  .home-layout {
    .carousel-block {
      width: 680px;
      height: 400px;
    }
  }
}
@media(min-width: 950px) {
  .home-layout {
    top: -100px;
  }
}
@media(min-width: 1169px) {
  .home-layout {
    .cards-carousel {
      h3 {
        text-align: start;
      }
      .cards {
        justify-content: space-between;
        .card {
          margin: 0;
        }
      }
    }
  }
}
</style>
