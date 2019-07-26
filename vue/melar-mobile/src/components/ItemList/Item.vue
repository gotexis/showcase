<template lang="pug">
    .shop-box-item(@click='$router.openPage(item.href)')
        img(v-lazy='item.src', alt='')
        p.title {{ item.title }}
        p.con {{ item.con }}
        p.money
            span.small ￥
            |  {{ item.money }}

</template>

<script>
  export default {
    name: 'ItemListItem',
    props: {
      item: {
        type: Object,
        default: function () {
          return {}
        },
      },
    },
    data() {
      return {}
    }
  }
</script>

<style lang="sass">

    .home-index .tab-box
        top: 2.5rem

        .home-index .tab-box.mi-tj .nav-mi-tj a
            display: block
            width: 25%

            .home-index .shop-box
                background-color: #fff

</style>
