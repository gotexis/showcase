<template lang="pug">
.container-login100
    .wrap-login100.p-t-65
        form.login100-form(@submit.prevent="loginAndRedirect(inputs)")
            span.login100-form-title.p-b-49
                | 登陆
            .wrap-input100.validate-input.m-b-23
                span.label-input100 用户名
                input.input100(type='text', name='username', placeholder='用户名' v-model="inputs.username")
                span.focus-input100.input-user
            .wrap-input100.validate-input
                span.label-input100 密码
                input.input100(type='password', name='password', placeholder='密码' v-model="inputs.password")
                span.focus-input100.input-password
            .text-right.p-t-8.p-b-31
                a(href='javascript:')
                    | 忘记密码?
            .container-login100-form-btn
                .wrap-login100-form-btn
                    .login100-form-bgbtn
                    button.login100-form-btn
                        | 登陆
            .flex-col-c
                a.txt2(@click="$router.go(-1)")
                    | 返回
            .txt1.text-center.p-t-54.p-b-20
                span
                    | 社交平台登入
            .flex-c-m
                a.login100-social-item.bg-wechat(href='javascript:')
                    WechatIcon(:size=35 style="height:35px; ")
                a.login100-social-item.bg3(href='javascript:')
                    SinaWeiboIcon(:size=35 style="height:35px; ")
                a.login100-social-item.bg2(href='javascript:')
                    FacebookIcon(:size=35 style="height:35px; ")
            .flex-col-c
                router-link.txt2(to="/")
                    | 手机注册
</template>

<script>
import WechatIcon from "vue-material-design-icons/Wechat"
import SinaWeiboIcon from "vue-material-design-icons/SinaWeibo"
import FacebookIcon from "vue-material-design-icons/Facebook"
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Login",
  components: {WechatIcon, SinaWeiboIcon, FacebookIcon},
  computed: {
    ...mapGetters('Auth', [
      'isAuthenticated'
    ])
  },
  methods: {
    ...mapActions('Auth', [
      'login',
    ]),
    async loginAndRedirect({username, password}) {
      await this.login({username, password})
      if (this.isAuthenticated) {
        this.$router.push('mine')
      }
    },
  },

  data() {
    return {
      inputs: {
        username: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.p-t-8
    padding-top: 8px

.p-t-54
    padding-top: 54px

.p-b-17
    padding-bottom: 17px

.p-b-20
    padding-bottom: 20px

.p-b-31
    padding-bottom: 31px

.p-b-49
    padding-bottom: 49px

.wrap-login100
    padding-bottom: 54px
    padding-right: 55px
    padding-left: 55px
    padding-top: 65px

.m-b-23
    margin-bottom: 23px

.text-center
    text-align: center

.text-right
    text-align: right

.flex-c-m
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    justify-content: center
    -ms-align-items: center
    align-items: center

.flex-col-c
    padding-top: 65px
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    -webkit-flex-direction: column
    -moz-flex-direction: column
    -ms-flex-direction: column
    -o-flex-direction: column
    flex-direction: column
    -ms-align-items: center
    align-items: center

/*! original /Login_v4/css/main.css */

*
    margin: 0
    padding: 0
    box-sizing: border-box

a
    font-size: 14px
    color: #666666
    margin: 0
    transition: all 0.4s
    -webkit-transition: all 0.4s
    -o-transition: all 0.4s
    -moz-transition: all 0.4s

    &:focus
        outline: none !important

    &:hover
        text-decoration: none
        color: #a64bf4

input
    outline: none
    border: none

    &:focus
        border-color: transparent !important

        &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder
            color: transparent

    &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder
        color: #adadad

button
    outline: none !important
    border: none
    background: transparent

    &:hover
        cursor: pointer

.txt1
    font-size: 14px
    line-height: 1.5
    color: #666666

.txt2
    font-size: 14px
    line-height: 1.5
    color: #333333
    text-transform: uppercase

.bg-wechat
    background-color: #00cc33

.bg2
    background-color: #1da1f2

.bg3
    background-color: #ea4335

.container-login100
    background-image: url("../../assets/img/login/background.jpg")
    width: 100%
    min-height: 100vh
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    padding: 15px
    background-repeat: no-repeat
    background-position: center
    background-size: cover

.wrap-login100
    width: 500px
    background: white
    border-radius: 10px
    overflow: hidden

.login100-form
    width: 100%

.login100-form-title
    display: block
    font-size: 39px
    color: #333333
    line-height: 1.2
    text-align: center

.wrap-input100
    width: 100%
    position: relative
    border-bottom: 2px solid #d9d9d9

.label-input100
    font-size: 14px
    color: #333333
    line-height: 1.5
    padding-left: 7px

.input100
    font-size: 16px
    color: #333333
    line-height: 1.2
    display: block
    width: 100%
    height: 55px
    background: transparent
    padding: 0 7px 0 43px

.focus-input100
    position: absolute
    display: block
    width: 100%
    height: 100%
    top: 0
    left: 0
    pointer-events: none

.input-user::after
    /* using SVG as mask to show icon */
    -webkit-mask-image: url("../../assets/icon/user-solid.svg")
    mask-image: url("../../assets/icon/user-solid.svg")

.input-password::after
    /* using SVG as mask to show icon */
    mask-image: url("../../assets/icon/unlock-solid.svg")
    -webkit-mask-image: url("../../assets/icon/unlock-solid.svg")

.focus-input100
    &::after
        -webkit-mask-position-y: center
        mask-repeat: no-repeat
        background-color: darkgray
        content: " "
        color: #adadad
        font-size: 22px
        display: -webkit-box
        display: -webkit-flex
        display: -moz-box
        display: -ms-flexbox
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        height: calc(100% - 20px)
        bottom: 0
        left: 0
        padding-left: 16px
        padding-top: 0
        margin-left: 15px

    &::before
        content: ""
        display: block
        position: absolute
        bottom: -1*2px
        left: 0
        width: 0
        height: 2px
        background: #7f7f7f
        -webkit-transition: all 0.4s
        -o-transition: all 0.4s
        -moz-transition: all 0.4s
        transition: all 0.4s

.input100:focus + .focus-input100
    &::before
        width: 100%

    &::after
        color: #a64bf4

.container-login100-form-btn
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    flex-wrap: wrap
    justify-content: center

.wrap-login100-form-btn
    width: 100%
    display: block
    position: relative
    z-index: 1
    border-radius: 25px
    overflow: hidden
    margin: 0 auto
    box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)
    -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)
    -webkit-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)
    -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)
    -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)

.login100-form-bgbtn
    position: absolute
    z-index: -1*1
    width: 300%
    height: 100%
    background: #a64bf4
    background: linear-gradient(to right, #00dbde, #fc00ff, #00dbde, #fc00ff)
    top: 0
    left: -1*100%
    -webkit-transition: all 0.4s
    -o-transition: all 0.4s
    -moz-transition: all 0.4s
    transition: all 0.4s

.login100-form-btn
    font-size: 16px
    color: white
    line-height: 1.2
    text-transform: uppercase
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    justify-content: center
    align-items: center
    padding: 0 20px
    width: 100%
    height: 50px

.wrap-login100-form-btn:hover .login100-form-bgbtn
    left: 0

.login100-social-item
    color: white
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    display: flex
    justify-content: center
    align-items: center
    width: 50px
    height: 50px
    border-radius: 50%
    margin: 5px

    &:hover
        color: white
        background-color: #333333

@media (max-width: 576px)
    .wrap-login100
        padding-left: 15px
        padding-right: 15px
</style>
