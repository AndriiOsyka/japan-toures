<template>
  <header-layout class="header-layout" />
  <div class="wraper">
    <router-view class="body-vue" />
  </div>
</template>

<script>
import HeaderLayout from './components/header-layout.vue'

export default {
  components: {
    HeaderLayout
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
#app {
  margin: 0 auto;
  color: $color-white;
  position: relative;
  @include font-lato;
  .wraper {
    margin: 0 auto;
    max-width: 1262px;
    position: relative;
  }
}

nav {
  padding: 30px;

  a {
    color: $color-white;

    &.router-link-exact-active {
      color: $color-purple;
    }
  }
}
</style>
