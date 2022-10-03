<template>
  <div class="all-guides">
    <guide-card
    v-for="guide_item of getGuides" :key="guide_item.id"
    :guide="guide_item"
     />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GuideCard from '../components/guide-card.vue'
export default {
  components: {
    GuideCard
  },
  methods: {
    ...mapActions(['GET_GUIDES_FROM_API'])
  },
  computed: {
    ...mapGetters(['getGuides'])
  },
  async created () {
    await this.GET_GUIDES_FROM_API()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.all-guides {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    background: $color-black;
    color: $color-white;
}
</style>
