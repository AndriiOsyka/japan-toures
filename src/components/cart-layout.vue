<template>
  <div class="cart-layout">
    <fa class="icon" :icon=icon />
    <h5>{{ header }}</h5>
    <p>{{ text }}</p>
    <btn-layout
    :style="'link-btn'"
    :text="'learn more'"
    @btnClick="learnMore">
      <span>learn more</span>
      <fa class="arrow" icon="fa-solid fa-right-long" />
    </btn-layout>
  </div>
</template>

<script>
import BtnLayout from './btn-layout.vue'
export default {
  components: {
    BtnLayout
  },
  props: {
    icon: {
      type: String
    },
    header: {
      type: String
    },
    text: {
      type: String
    }
  },
  methods: {
    learnMore () {
      this.$router.push({ path: `/service/${this.header}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.cart-layout {
    width: 317px;
    height: 288px;
    @include font-lato;
    color: $color-black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
        color: $color-blue;
        height: 66px;
        margin-bottom: 36px;
    }
    h5 {
        font-weight: 500;
    }
    p {
        font-size: 16px;
        margin: 26px 0 39px 0;
    }
    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        span {
            color: $color-blue;
            text-transform: uppercase;
            font-size: 16px;
        }
        .arrow {
            color: $color-blue;
            width: 33px;
        }
    }
}
@media(min-width: 853px) {
    .cart-layout {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
