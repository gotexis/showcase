<template lang="pug">
    .swiper-container.vue-swiper(ref='swiper')
        .swiper-wrapper
            .swiper-slide(v-for='(x, index) in list', :key='index')
                a(@click="x.href ? $router.openPage(x.href) : ''")
                    img(:src='x.src', :alt="x.alt || 'img'+index")
        .swiper-pagination(ref='pagination')
</template>

<script>
  import Swiper from 'swiper'

  let myswiper
  export default {
    name: 'swiper',
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
    },
    data() {
      return {}
    },
    mounted() {
      myswiper = new Swiper(this.$refs.swiper, {
          pagination: {
            el: this.$refs.pagination,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          observer: true,  // observes mutations
        }
      )
    },
    watch: {
      list() {
        setTimeout(function () {
          myswiper.update();
        }, 10)
      }
    }
  }
</script>

<style lang="sass">
    @import "../../../node_modules/swiper/dist/css/swiper.min.css"

    .vue-swiper
        .swiper-pagination-bullet, .swiper-pagination-white .swiper-pagination-bullet-active
            background-color white
</style>
