<template lang="pug">
footer.footer.clear(:class="{ 'leave': footerHide }")
    .footer-item(:class="{ 'active': isActive('home') }", @click="$router.push('home')")
        p.icon
            span.iconfont.icon-shouye
        p.name 首页
    .footer-item(:class="{ 'active': isActive('classification') }", @click="$router.push('classification')")
        p.icon
            span.iconfont.icon-fenlei
        p.name 分类
    .footer-item.shop-car(:class="{ 'active': isActive('cart') }", @click="$router.push('cart')")
        p.icon
            span.iconfont.icon-gouwuche
        p.name 购物车
        // Cart Length
        span.num(v-show='getShopCarLength > 0', :class="{ 'full': parseInt(getShopCarLength) >= 99 }") {{ getShopCarLength >= 99 ? '99+' : getShopCarLength }}
    .footer-item(:class="{ 'active': isActive('mine') }", @click="$router.push('mine')")
        p.icon
            span.iconfont.icon-smile
        p.name 我的
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {MENU} from "router"

export default {
  name: 'footermenu',
  data() {
    return {}
  },
  watch: {
    $route(to, from) {
      // control hideFooter
      let footerHide = true
      if (MENU.includes(this.$route.name)) {
        footerHide = false
      }
      if (this.isActive('cart') && this.getShopCarLength > 0) {
        footerHide = true
      }
      if (this.footerHide !== footerHide) {
        this.setFooterHide(footerHide)
      }
    }
  },
  computed: {
    ...mapGetters({
      'footerHide': "Presentation/footerHide",
      'getShopCarLength': 'getShopCarLength',
    }),
  },
  methods: {
    ...mapActions('Presentation', [
      'setFooterHide',
    ]),
    isActive(name) {
      return this.$route.name == name
    },
  }
}
</script>
