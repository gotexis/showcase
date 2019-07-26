<template lang="pug">

    a(v-if="!signState", @click="saveURL") 登录

</template>

<script>
  export default {
    name: "index",
    // https://blog.csdn.net/weixin_34119545/article/details/88258187
    data() {
      return {
        // https://github.com/settings/applications/1031264
        // callbackURL is : http://10.0.75.1:8080/auth/callback/github
        client_id: '6f903b622ab3fa6c4698',
        client_secret: 'c8448b9f35770682571c20a8afd217418ed7d6e9',
        scope: 'read:user', // Grants access to read a user's profile data.
        state: 'your state',
        getCodeURL: 'https://github.com/login/oauth/authorize',
        getAccessTokenURL: '/github/login/oauth/access_token',
        getUserURl: 'https://api.github.com/user',
        redirectURL: null,
        code: null,
        accessToken: null,
        signState: false
      }
    },
    methods: {
      saveURL() {
        if (Query.parse(location.search).state !== this.state) {
          this.$cookie.set('redirectURL', location.href, 1)
          location.href = this.getCodeURL
        }
      }
    }
  }
</script>

<style scoped>

</style>

