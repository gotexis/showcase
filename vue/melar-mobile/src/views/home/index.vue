<template lang="pug">
    .app-init.home-index
        header.public-header
            form.search-box.clear
                .fl.logo
                    span.iconfont.icon-xiaomi
                .input-box(@click="$router.openPage('/search')")
                    span.iconfont.icon-sousuo-copy.absolute
                    input.input-controller(type='text', placeholder='搜索商品名称', readonly='')
                .myself-center.fr(@click="$router.openPage('/mine')")
                    span.iconfont.icon-smile
            nav.menu-box.scroll-box-x.noscroll
                ul.wrap-box.clear
                    li.item(:class="{ 'active' : index == getNavListActiveIndex }", v-for='(value, index) in navList', @click='setNavListActiveIndex(index)', :key='index')
                        span {{value.name}}
        ItemListPage(ref='view00', v-show='getNavListActiveIndex == 0', :itemlist="shoplist")
        ItemListPage(ref='view01', v-show='getNavListActiveIndex == 1', :itemlist="shoplist01")

</template>

<script >
  import Swiper from 'components/Swiper'
  import Itemlistitem from "components/ItemList/Item"
  import ItemListPage from "components/ItemList"
  import IconRow from "components/NavIconRow/index"
  import {mapActions, mapGetters, mapMutations} from "vuex"
  import ItemBig from "components/ItemList/ItemBig"

  export default {
    components: {
      ItemBig,
      IconRow,
      ItemListPage,
      Itemlistitem,
      Swiper,
    },
    computed: {
      ...mapGetters([
        'getNavListActiveIndex',
      ]),
    },
    methods: {
      ...mapActions([
        'setNavListActiveIndex',
      ]),
      ...mapMutations([
        'mutateNavListActiveIndex',
      ]),
    },
    data() {
      return {

        navList: [
          {
            name: '推荐'
          },
          {
            name: '手机'
          },
        ],
        bannerList: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/01.png',
            href: '/detail/1001'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/02.jpg',
            href: '/detail/1002'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/03.jpg',
            href: '/detail/1003'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/04.jpg',
            href: '/detail/1004'
          }
        ],
        shoplist: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '王老二剪刀课',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          }
        ],
        bannerList01: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg',
            href: '/detail/1007'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213275295675.png',
            href: '/detail/1009'
          }
        ],
        shoplist01: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          }
        ],

        bannerList02: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213533255816.png',
            href: '/detail/1011'
          }
        ],
        shoplist02: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          }
        ],

      }
    },

    mounted() {
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
            background-color: #fff

</style>
