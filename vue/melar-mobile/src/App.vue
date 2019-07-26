<template lang="pug">
div
    // global loading bar
    .loading-bar(:class='statusBar')
        span.press
    .app-init
        // global transition
        transition(:name='transitionName')
            router-view
    // global footer menu
    FooterMenu
</template>

<script>
import Rem from 'assets/js/rem'
import {mapActions, mapGetters} from 'vuex'
import FooterMenu from "./components/FooterMenu"
import {MENU} from "router"

new Rem()
export default {
  name: 'app',
  components: {FooterMenu},
  data() {
    return {
      transitionName: 'slide-go', // default
    }
  },
  watch: {
    $route(to, from) {
      // as per official https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const depthDelta = toDepth - fromDepth
      const fade = ['login']                                        // always requires fade animation  |should be static

      if (fade.includes(to.name) || fade.includes(from.name)) {
        this.transitionName = 'fade'
        return
      }

      // first compare depth
      switch (true) {
        case (depthDelta > 0):
          this.transitionName = 'slide-go'
          break
        case (depthDelta < 0):
          this.transitionName = 'slide-back'
          break
        case (depthDelta === 0):
          // compare menu item
          this.transitionName = MENU.indexOf(to.name) < MENU.indexOf(from.name) ? 'slide-back' : 'slide-go'
      }
      // console.log(this.transitionName)
    }
  },
  computed: {
    ...mapGetters({
      'footerHide': "Presentation/footerHide",
      'statusBar': "Presentation/statusBar",
      'getShopCarLength': 'getShopCarLength',
    }),
  },
  methods: {
    ...mapActions('Presentation', [
      'setFooterHide',
    ]),
  }
}
</script>


<style lang="sass">
@import "assets/sass/base"
@import "assets/sass/footer"
@import "assets/sass/loading_bar"
@import "assets/sass/transition"
@import "assets/sass/util"
@import 'assets/font/iconfont.css'

</style>
