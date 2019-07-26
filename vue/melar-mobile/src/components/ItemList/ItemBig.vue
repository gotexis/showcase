<template lang="pug">

.shop-item.clear
    img(@click="$router.openPage('/detail/1003')", v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'", alt='')

</template>

<script>
  export default {
    name: 'ItemBig',
    props: {
    },
    data() {
      return {}
    }
  }
</script>
