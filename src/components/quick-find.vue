<template>
  <div class="quick-find">
    <h3>Discover Amazing places in Japan</h3>
    <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
    <div class="find">
        <input-layout
        class="input-margin"
        :text="'What would you like to do?'" />
        <input-layout
        class="input-margin"
        :text="'Where would you like to go?'" />
        <btn-layout class="btn"
        :text="'SEARCH'"
        :style="'btn-blue-search'" />
    </div>
  </div>
</template>

<script>
import InputLayout from './input-layout.vue'
import BtnLayout from './btn-layout.vue'

export default {
  components: {
    InputLayout,
    BtnLayout
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.quick-find {
  display: flex;
  flex-direction: column;
  align-items: center;
    h3 {
        @include font-lato;
        font-size: 50px;
        line-height: 60px;
        font-weight: 500;
        max-width: 400px;
        text-align: center;
    }
    p {
        @include font-lato;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        max-width: 546px;
        margin: 22px 0 40px 0;
        text-align: center;
    }
    .find {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .btn {
          max-height: 60px;
        }
        .input-margin {
          margin-right: 0;
        }
    }
}
@media (min-width: 950px) {
  .quick-find {
    align-items: flex-start;
    h3 {
      max-width: 619px;
      text-align: start;
    }
    p {
      text-align: start;
    }
    .find {
      flex-direction: row;
      align-items: none;
      .input-margin {
        margin-right: 60px;
      }
    }
  }
}
</style>
