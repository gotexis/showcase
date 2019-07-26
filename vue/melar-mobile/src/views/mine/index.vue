<template lang="pug">
.app-init.scroll-box.mine-page.footer-hack
  .user-box.public-padding
    .face-book
      img(@click="$router.push('pay')", src='http://qiniu.verydog.cn/show.liluo.cc/normal-face.png', alt='')
    p.fl(@click="$router.push('pay')")  登录 /  注册
  .dingdan.public-padding.p-item(@click="$router.push('pay')")
    | 我的订单
  .tab-box.clear
    .item(@click="$router.push('pay')")
      p.icon
        span.iconfont.icon-qianbao
      p.name 待付款
    .item(@click="$router.push('pay')")
      p.icon
        span.iconfont.icon-daishouhuo
      p.name 待收货
    .item(@click="$router.push('pay')")
      p.icon
        span.iconfont.icon-buoumaotubiao46
      p.name 退换修
  .new-wrap
    .dingdan.public-padding.p-item(@click="$router.push('pay')")
      span.iconfont.icon-huiyuan(style='color: #FDBF2D;')
      span 会员福利
    .dingdan.public-padding.p-item(@click="$router.push('pay')")
      span.iconfont.icon-qianbao1(style='color: #51BBE0;')
      span 我的优惠
  .new-wrap
    .dingdan.public-padding.p-item(@click="$router.push('pay')")
      span.iconfont.icon-fuwuerji2(style='color: #F96C5E;')
      span 服务中心
    .dingdan.public-padding.p-item(@click="$router.push('pay')")
      span.iconfont.icon-shop(style='color: #FF8B43;')
      span 小米之家
  .new-wrap
    .dingdan.public-padding.p-item(@click="$router.push('pay')")
      span.iconfont.icon-shezhi(style='color: #818C99;')
      span 设置

</template>

<script >
  export default{
    name: 'mine-page'
  }
</script>

<style lang="sass">
  @import "../../assets/sass/util"
  .mine-page
    .public-padding
      padding: 0 getIphonese(30px)

    .user-box
      height: getIphonese(142px)
      background: #f37d0f url(http://qiniu.verydog.cn/show.liluo.cc/bg.63c8e19.png) repeat top center
      background-size: 7.7rem
      @include box-sizing
      padding-top: getIphonese(28px)
      padding-bottom: getIphonese(28px)

    .user-box
      line-height: 1.33rem
      .face-book
        width: 1.33rem
        height: 1.33rem
        float: left
        border-radius: 100%
        border: 3px solid hsla(0,0%,100%,.4)
        overflow: hidden
        @include box-sizing
        img
          width: 100%
          height: 100%
      p
        padding-left: 0.2rem
        color: #fff
        @include f12px

    .dingdan
      line-height: getIphonese(80px)
    .p-item:active
      background-color: #eee
    .p-item
      background-color: #fff
      color: rgba(0,0,0,.87)
      position: relative
      border-bottom: 1px solid #D9D9D9
    .p-item:after
      font-family: 'iconfont'
      content: "\e628"
      position: absolute
      right: getIphonese(26px)
      color: #777777
    .new-wrap
      background-color: #fff
      margin-bottom: 0.26rem
      .p-item
        position: relative
        border-bottom: none
        padding-left: 1.5rem
        @include f12px
      .p-item:before
        position: absolute
        content: ''
        display: block
        width: 8.44rem
        right: 0
        bottom: 0


        border-bottom: 1px solid #D9D9D9
      .p-item:last-child:before
        border-bottom: none

      .iconfont
        font-size: 0.65rem
        width: 0.8rem
        display: inline-block
        text-align: center
        position: absolute
        left: 0.5rem

    .tab-box
      background-color: #fff
      margin-bottom: 0.26rem
      .item
        float: left
        width: 33.3%
        text-align: center
        height: 2.32rem
        .icon
          font-size: 0.6rem
          color: #A4A4A4
          padding-top: 0.36rem
        .name
          @include f12px
          padding-top: 0.1rem
      .item:active
        background-color: #eee
</style>
