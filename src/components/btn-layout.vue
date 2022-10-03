<template>
  <div class="btn-layout">
    <button :class=style
    @click="emitClick">
        {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    style: {
      type: String,
      default () {
        return 'btn-blue-search'
      }
    }
  },
  methods: {
    emitClick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.link-btn {
  background: none;
  border: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  @include font-lato;
  color: $color-blue;
  font-size: 16px;
  position: relative;
  padding-right: 60px;
  &::before {
    content: "";
    height: 2px;
    width: 30px;
    background: $color-blue;
    position: absolute;
    top: 50%;
    right: 0;
  }
  &::after {
    content: "";
    height: 5px;
    width: 5px;
    border: none;
    border-right: 2px solid $color-blue;
    border-bottom: 2px solid $color-blue;
    position: absolute;
    transform: rotate(315deg);
    right: 0;
    top: 40%;
  }
  &:hover {
    cursor: pointer;
  }
}
.btn-blue-search {
  max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 39px;
    background: $color-blue;
    border: 1px solid $color-blue;
    transition: .5s;
    @include font-lato;
    font-size: 24px;
    font-weight: 500;
    color: $color-white;
    &:hover {
        color: $color-blue;
        background: $color-white;
        cursor: pointer;
    }
}
.selector-left {
  width: 30px;
  height: 30px;
  border: 1px solid $color-white;
  border-radius: 50%;
  position: relative;
  background: none;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 4px);
    width: 12px;
    height: 12px;
    border: none;
    background: none;
    border-left: 2px solid $color-white;
    border-bottom: 2px solid $color-white;
    transform: rotate(45deg);
  }
}
.selector-right {
  width: 30px;
  height: 30px;
  border: 1px solid $color-white;
  border-radius: 50%;
  position: relative;
  background: none;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 6px);
    right: calc(50% - 4px);
    width: 12px;
    height: 12px;
    border: none;
    background: none;
    border-right: 2px solid $color-white;
    border-bottom: 2px solid $color-white;
    transform: rotate(-45deg);
  }
}
</style>
