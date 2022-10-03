<template>
  <div class="guide-card">
    {{ guide.id }}
  </div>
</template>

<script>
export default {
  props: {
    guide: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

</style>
