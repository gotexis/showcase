<template lang="pug">
.shop-item.clear
    img.fl.href(@click="$router.openPage('/detail/1001')", v-lazy="{'src': 'http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png'}", alt='')
    img.fr.href(@click="$router.openPage('/detail/1004')", v-lazy="{'src': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252'}", style='margin-bottom: 0.05rem', alt='')
    img.fr.href(@click="$router.openPage('/detail/1005')", v-lazy="{'src': 'http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png'}", alt='')

</template>

<script>
  export default {
    name: 'ItemBig2',
    props: {},
    data() {
      return {
        imgObj: {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png',
          error: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252',
          loading: 'http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png'
        },
      }
    }
  }
</script>
