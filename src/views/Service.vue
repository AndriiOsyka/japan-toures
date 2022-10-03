<template>
  <div class="service">
    <div class="screen">
        <h1>{{ correctService.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          name: 'Welcome to Odigo!'
        },
        {
          name: 'Your Personal Japan Guide'
        },
        {
          name: 'Promoting Local Businesses'
        }
      ]
    }
  },
  computed: {
    correctService () {
      // eslint-disable-next-line
      return this.services.filter(service => service.name === this.$route.params['id'])[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.screen {
    margin: 0 auto;
    h1 {
        color: $color-black;
    }
}
</style>
