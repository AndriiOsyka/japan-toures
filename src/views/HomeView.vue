<template>
  <div class="home-layout">
    <home class="home" />
  </div>
</template>

<script>
import Home from '@/components/home-layout.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Home
  },
  methods: {
    ...mapMutations(['SET_GUIDES'])
  },
  async mounted () {
    await this.SET_GUIDES([])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

</style>
