Melar mobile
======

# melar-mobile
Vue Mobile frontend for the Melar E-commerce PaaS

# to read
* https://vuex-orm.github.io/plugin-graphql/guide/
* https://blog.csdn.net/weixin_34119545/article/details/88258187

# todo
* split components / views
* implement Oauth2
* implement WeChat pay
* GraphQL / Vue-ORM-GraphQL pagination / filter
* GraphQL API use authentication
* make other views (logistics)
* [add caching](#caching)

# note
* vue2 transition may be not needed due to it is not for page..

# to consult
* the other mi-shop vue project

# caching

* server-side caching with Json, redis query result, etc
* Nuxt caching
* GraphQL super.. resolve 


# others
* 小米商城SNS login
  https://open.weixin.qq.com/connect/qrconnect?
  appid=wxa21de3acc0d5e79b
  redirect_uri=https://account.xiaomi.com/pass/sns/login/load
  response_type=code
  scope=snsapi_login
  state=WEIXIN916239#wechat_redirect
  
# normal auth procedure

* client post password/username
* server respond with token
