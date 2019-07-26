<template lang="pug">
    .app-init.search-page
        header.public-header(style='box-shadow: none')
            form.search-box.clear(@submit.stop.prevent='submit')
                .fl.logo(style='position: relative; top: -0.01rem;', @click='$router.back()')
                    span.iconfont.icon-backer(style='color: #9F9F9F; font-size: 0.6rem')
                .input-box
                    input.input-controller(type='text', style='padding-left: 0.3rem;', v-model='nowInput', placeholder='搜索商品名称')
                .myself-center.fr
                    span.iconfont.icon-sousuo-copy(style='color: #9F9F9F')
        .my-body.scroll-box
            ul.result
                li.item(v-for='(target, index) in getResultItem', :key='index', @click='$router.openPage(target.link)') {{ target.name }}
            .title 热门搜索
            img(src='http://i8.mifile.cn/b2c-mimall-media/60c89ea361bed3a7edaf73b3b6663608.jpg?bg=BBD6DF', @click="$router.openPage('/detail/1009')", alt='')
            ul.hot-box
                li.item 小米耳机
                li.item 小米音箱
                li.item 电视机
                li.item 红米
                li.item 24寸
                li.item 年轻人的第一张简历
                li.item 雷军
                li.item Are you ok?

</template>

<script>

  import axios from 'axios'

  export default {
    name: 'search-page',
    data() {
      return {
        resout: [],
        nowInput: ''
      }
    },
    methods: {
      submit() {

      }
    },
    mounted() {
      // 默认请求一遍
      // 由于为本地json 不对错误进行处理
      axios.get('./server/lib.json')
        .then(response => {
          this.resout = response.data.resout;
        })
        .catch(() => {
          // this.$router.replace('/error/404')
        });
    },
    computed: {
      getResultItem() {
        let callback = []

        if (this.nowInput == '') {
          return callback
        }

        for (var i = 0; i < this.resout.length; i++) {
          if (this.resout[i].name.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1) {
            callback.push(this.resout[i])
          }
        }

        return callback
      }
    }
  }
</script>

<style lang="sass">
@import '../../assets/sass/util'
.search-page
    background-color: #fff

    .public-header
        position: absolute
        top: 0
        width: 100%
        left: 0

    .my-body
        position: absolute
        left: 0
        bottom: 0
        right: 0
        top: 1.37rem

    .title
        padding: .3rem
        @include f12px
        color: #3c3c3c

    .hot-box
        padding: .3rem
        @include f12px

        li.item
            display: inline-block
            padding: 0 .4rem
            line-height: 0.8rem
            margin-right: 0.2rem
            margin-bottom: 0.2rem
            border: 1px solid #E4E4E4
            background-color: #FFF9F8

    .result
        background-color: #F5F5F5

        .item
            color: #3c3c3c
            @include f12px
            padding: 0 0.4rem
            line-height: 1.2rem
            border-bottom: 1px solid #e0e0e0

        .item:first-child
            border-top: 1px solid #e0e0e0
</style>
