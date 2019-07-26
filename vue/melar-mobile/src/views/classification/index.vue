<template lang='pug'>
.app-init.classification
    .classification-header
        header-back(title='分类')
    .wrap-box
        .left-menu.absolute.scroll-box(ref='left')
            ul
                li.item(
                    v-for='(target, index) in dataItem'
                    :key='index'
                    :class="{'active': index == active }"
                    @click='jumpToTarget(index)') {{target.name}}
        .right-box.absolute.scroll-box(ref='rightView')
            ul
                li.item(v-for='(target, index) in dataItem', :key='index')
                    p.title
                        // 类别名称
                        span {{target.name}}
                    .shop-item-wrap.clear
                        // 单品
                        .shop-item(v-for='(shop, index) in target.children', :key='index', @click='$router.openPage(shop.link)')
                            p
                                img(:src='shop.src', alt='')
                            p.name {{shop.name}}
</template>

<script>
import headerBack from 'components/HeaderBack'
import _ from 'lodash'
import VueDB from 'util/vue-db/vue-db'
import Listing from 'models/core/Listing'
import Item from 'models/core/Item'
import User from 'models/users/User'
import Category from 'models/core/Category'
import {mapGetters} from "vuex"
import {CreateMixin, ListMixin} from "mixins/crud"
import Vue from "vue"
import gql from "graphql-tag"

let DB = new VueDB()

export default Vue.extend({
  name: 'classification',
  mixins: [ListMixin],
  data() {
    return {
      active: 0,
      dataItem: [
        {
          name: '新品',
          children: [
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '手机',
          children: [
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '电视',
          children: [
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '电脑',
          children: [
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
      ],
      offset: []
    }
  },
  apollo: {
    // Query with parameters
    cities: {
      // gql query
      query: gql`
        query cities {
          cities(name_Icontains:"德", first: 3) {
            edges {
              node {
                id
                name
                province {
                  name
                }
                areaSet {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }`,
    },
  },
  computed: {
    ...mapGetters("Models/category", {
      categories: 'all',
    }),
    ...mapGetters("Models/user", {
      users: 'all',
    }),
    ...mapGetters("Models/item", {
      users: 'all',
    }),
  },
  components: {
    headerBack
  },
  methods: {
    jumpToTarget(index) {

      let scrollTop = this.offset[index]
      this.$refs.rightView.scrollTop = scrollTop

      setTimeout(() => {
        this.active = index
      }, 10)
    }
  },
  mounted() {

    let scrollDB = {
      left: DB.getItemOnce('classification-left-scrollTop').toNumber(),
      right: DB.getItemOnce('classification-right-scrollTop').toNumber()
    }
    setTimeout(() => {
      _.forEach(this.$refs.rightView.querySelectorAll('.item'), (value, key) => {
        this.offset.push(value.offsetHeight * key)
      })


      let mySort = this.offset;

      this.$refs.rightView.addEventListener('scroll', () => {

        let eScrollTop = this.$refs.rightView.scrollTop;

        for (let indexer = 0; indexer < mySort.length; indexer++) {
          if (eScrollTop > mySort[indexer]) {
            this.active = indexer;
          }
        }

      })

      setTimeout(() => {
        this.$refs.left.scrollTop = scrollDB.left
        this.$refs.rightView.scrollTop = scrollDB.right
      }, 10)
    }, 100)


  },
  beforeRouteLeave(to, from, next) {
    DB.setItem('classification-left-scrollTop', this.$refs.left.scrollTop)
    DB.setItem('classification-right-scrollTop', this.$refs.rightView.scrollTop)
    next();
  }
})
</script>

<style lang="sass">
@import "../../assets/sass/util"
.classification
    background-color: #fff

    .wrap-box
        position: absolute
        width: 100%
        top: getIphonese(100px)
        left: 0
        bottom: $footerHeight

    .left-menu
        width: getIphonese(133px)
        left: 0
        top: 0
        bottom: 0
        border-right: 1px solid #efefef
        overflow-x: hidden
        @include box-sizing

        ul
            padding-bottom: 0.44rem

        li.item
            margin-top: getIphonese(56px)
            text-align: center
            -webkit-transition: all .1s ease
            transition: all .1s ease

        li.item.active
            color: #fb7d34
            transform: scale(1.2)

    .right-box
        left: getIphonese(133px)
        top: 0
        right: 0
        bottom: 0

        .item
            padding-top: 0.8rem

        .title
            text-align: center
            padding-bottom: 0.2rem

            span
                position: relative
                display: inline-block

                &:after, &:before
                    display: inline-block
                    width: getIphonese(34px)
                    height: 1px
                    top: 50%
                    background-color: #e0e0e0
                    position: absolute
                    content: ''

                &:after
                    left: getIphonese(-50px)

                &:before
                    right: getIphonese(-50px)

        .shop-item-wrap
            .shop-item
                text-align: center
                float: left
                width: 33.3%
                color: #757575
                margin-bottom: 0.1rem
                @include f12px

                img
                    width: getIphonese(80px)
                    padding-bottom: 0.1rem
</style>
