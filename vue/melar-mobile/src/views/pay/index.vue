<template lang="pug">
    .app-init.pay-page.scroll-box
        header-back(title='关于')
        .padding-box
            p
                | 商城 功能, 布局 由Exis实现，图片来源界面布局排版均防自
                span.color 小米商城 m.mi.com
            br
            p 联系我
            p e-mail: gotexis@gmail.com
            p github: github.com/gotexis
            p website: https://pinxed.com
</template>

<script>
  import headerBack from 'components/HeaderBack'

  export default {
    name: 'pay',
    components: {
      headerBack
    }
  }
</script>

<style lang="sass">
    .pay-page
        background-color: white

        .padding-box
            padding: 0.4rem
            color: #333

            .color
                color: orange

            ul
                padding-left: 0.8rem

            li
                list-style: disc
</style>
