<template>
  <div :class="[ background ? 'back' : 'border', 'input-layout']">
    <input
    type="text"
    :placeholder=text
    v-model="value" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      background: false,
      value: null
    }
  },
  props: {
    text: {
      type: String,
      default () {
        return 'text'
      }
    }
  },
  methods: {
    clicked () {
      // eslint-disable-next-line
      this.background = this.background ? false : true
    }
  },
  watch: {
    value () {
      // eslint-disable-next-line
      this.background = this.value ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.back {
    &::before {
        content: "";
        transition: .5s;
        position: absolute;
        top: 50%;
        left: 0;
        border: 3px solid $color-white;
        border-radius: 50%;
        transform: translateY(-50%);
        height: 15px;
        width: 15px;
        background: $color-white;
    }
}

.border {
    &::before {
        content: "";
        transition: .5s;
        position: absolute;
        top: 50%;
        left: 0;
        border: 3px solid $color-white;
        border-radius: 50%;
        transform: translateY(-50%);
        height: 15px;
        width: 15px;
    }
}

.input-layout {
    border-bottom: 1px solid $color-white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 40px;
    position: relative;
    max-width: 350px;
    margin-bottom: 40px;
    input {
        &::placeholder {
        color: $color-white;
        transition: .3s;
        }
        &:active, &:focus {
            &::placeholder {
                color: $color-gray;
            }
        }
        border: none;
        @include font-lato;
        color: $color-white;
        background: none;
        min-width: 230px;
    }
}
@media(min-width: 950px) {
  .input-layout {
    margin-bottom: 0;
  }
}
</style>
