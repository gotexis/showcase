<template lang="pug">
    .app-init.scroll-box.tab-box.footer-hack
        //ItemBig
        //ItemBig2
        .shop-item
            img(src='http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png', alt='热销爆款')
            .shop-box.clear
                ItemListItem(v-for='(item, index) in itemlist', :item="item", :key='index', :index="index")

</template>

<script>
  import ItemListItem from "./Item";
  // import ItemBig from "./ItemBig";
  // import ItemBig2 from "./ItemBig2";

  export default {
    name: 'ItemListPage',
    props: {
      itemlist: {
        type: Array,
        default: function () {
          return [{}]
        },
      },
    },
    data() {
      return {}
    },
    components: {
      // ItemBig2,
      // ItemBig,
      ItemListItem
    },
    mounted() {
      // todo: might need manually triggering lazyload.start here as it often wouldn't load when v-show is switched.
      // we can switch to router component solution so this may not be a problem...
      // window.scrollTop()
    },
  }
</script>

<style lang="sass">

    .home-index .tab-box
        top: 2.5rem

        .home-index .tab-box.mi-tj .nav-mi-tj a
            display: block
            width: 25%

        .home-index .shop-box
            background-color: white

</style>
