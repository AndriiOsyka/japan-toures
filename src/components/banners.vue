<template>
  <div class="banners">
    <div class="header-block">
        <h3>
            Get inspired for your next trip
            <div class="line"></div>
        </h3>
        <router-link class="link-arrow" to="/allGuides">
            <span>View all</span>
            <fa class="arrow" icon="fa-solid fa-right-long" />
        </router-link>
    </div>
    <div class="pictures">
        <div>
            <img :src="require( '../assets/' + images[0].code )" alt="image">
        </div>
        <div>
            <img :src="require( '../assets/' + images[1].code )" alt="image">
        </div>
        <div>
            <img :src="require( '../assets/' + images[2].code )" alt="image">
        </div>
        <div>
            <img :src="require( '../assets/' + images[3].code )" alt="image">
        </div>
        <div>
            <img :src="require( '../assets/' + images[4].code )" alt="image">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.banners {
    max-width: 1262px;
    margin: 0 auto;
    .header-block {
        display: flex;
        justify-content: space-between;
        h3 {
            color: $color-darkblue;
            font-size: 35px;
            font-weight: 500;
            line-height: 42px;
            .line {
                margin-top: 7px;
                width: 40%;
                height: 3px;
                background: $color-blue;
                border: none;
            }
        }
        .link-arrow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-blue;
            text-decoration: none;
            span {
                text-transform: uppercase;
                margin-right: 10px;
                font-size: 16px;
            }
        }
    }
    .pictures {
        display: flex;
        flex-wrap: wrap;
        padding: 36px 0;
        height: 650px;
        img {
            transition: 1s;
            &:hover {
                transform: scale(1.2);
                border: 3px solid $color-white;
            }
        }
        div:nth-child(1), div:nth-child(2) {
            height: 55%;
            width: 50%;
            padding-bottom: 5px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        div:nth-child(3), div:nth-child(4), div:nth-child(5) {
            height: 45%;
            width: 33.3%;
            padding-top: 5px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        div:nth-child(1), div:nth-child(3) {
            padding-right: 5px;
        }
        div:nth-child(2), div:nth-child(5) {
            padding-left: 5px;
        }
        div:nth-child(4) {
            padding: 5px 5px 0 5px;
        }
    }
}

</style>
