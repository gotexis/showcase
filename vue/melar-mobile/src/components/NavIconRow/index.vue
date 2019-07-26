<template lang="pug">
.nav-mi-tj.clear
  NavIconItem
  a.fl
    img(@click="$router.push('pay')", src='http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png', alt='')
  a.fl
    img(@click="$router.push('pay')", src='http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png', alt='')
  a.fl
    img(@click="$router.push('pay')", src='http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png', alt='')

</template>

<script>
  import NavIconItem from "./NavIconItem";
  export default {
    name: 'IconRow',
    components: {NavIconItem},
    props: {
    },
    data() {
      return {}
    }
  }
</script>
