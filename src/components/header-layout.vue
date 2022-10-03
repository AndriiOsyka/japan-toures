<template>
  <div class="header-layout">
    <div class="navigation">
        <router-link to="/" class="logo">
            <span>Odigo</span>
        </router-link>
        <nav class="mobile-desc-nav">
            <button
              @click="click"
              class="btn">
                <fa class="icon" icon="fa-solid fa-bars" />
            </button>
            <nav>
                <router-link to="/articles">Articles</router-link>
                <router-link to="/locations">Locations</router-link>
                <router-link to="/videos">Videos</router-link>
                <router-link to="/signIn">Sign In</router-link>
            </nav>
        </nav>
    </div>
    <div class="find-body">
        <quick-find class="quick-find" />
    </div>
  </div>
</template>

<script>
import QuickFind from './quick-find.vue'

export default {
  data () {
    return {
      mobile_nav: false
    }
  },
  components: {
    QuickFind
  },
  methods: {
    click () {
      // eslint-disable-next-line
      this.mobile_nav = !this.mobile_nav ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.header-layout {
    height: 962px;
    margin: 0 auto;
    padding: 56px 0;
    background: url(../assets/moon.jpg) center no-repeat;
    background-size: cover;
    .navigation {
        width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 1060px;
        margin: 0 auto;
        .mobile-desc-nav {
            text-align: right;
            position: relative;
            &:hover {
                nav {
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    min-width: 90px;
                    bottom: 0;
                    right: 0;
                    transform: translateY(100%);
                }
            }
            .btn {
                background: none;
                border: none;
                cursor: pointer;
                .icon {
                    color: $color-white;
                    height: 22px;
                }
            }
            nav {
                width: 100%;
                display: none;
                justify-content: space-between;
                a {
                    display: flex;
                    align-items: flex-end;
                    transition: .5s;
                    &:hover {
                        color: $color-purple;
                    }
                }
            }
        }
        a {
            text-decoration: none;
            @include font-lato;
            span {
                font-size: 24px;
                color: $color-white;
            }
        }
    }
    .find-body {
        width: 100%;
        max-width: 1060px;
        display: flex;
        margin: 177px auto 0;
        .quick-find {
            width: 100%;
            max-width: 900px;
        }
    }
}

@media (min-width: 800px) {
    .mobile-desc-nav {
        .btn {
            display: none;
        }
    }
    .header-layout {
        .navigation {
            .mobile-desc-nav {
                width: 40%;
                &:hover {
                    nav {
                        display: flex;
                        flex-direction: row;
                        position: static;
                        transform: none;
                    }
                }
            }
        }
    }
    .header-layout {
        .navigation {
            .mobile-desc-nav {
                nav {
                display: flex;
                flex-direction: row;
                }
            }
        }
    }
}
</style>
