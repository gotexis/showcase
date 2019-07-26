<template lang="pug">
#oauth.container-fluid
    .row.justify-content-center.py-4
        // login
        .col-md-5.col-xl-3(v-if='!$store.getters.loggedIn && !error')
            v_login
        // grant access
        .col-md-5.col-xl-3(v-if='$store.getters.loggedIn && !error')
            .card
                .card-body
                    // header
                    h4.card-title Grant Access
                    hr
                    // app name
                    p
                        strong {{ name }}
                        |  wants to connect to your account?
                    // permissions
                    p.mb-0 Permissions:
                    span.badge.badge-primary.mr-1(v-for='permission in scope')
                        | {{ permission }}
                    hr
                    // authorize buttons
                    .float-right
                        button.btn.btn-primary(@click='newVendorAccessToken()', type='button') Authorize
        // error
        .col-md-5.col-xl-3(v-if='error')
            .alert.alert-danger(role='alert')
                | Invalid query parameters
</template>

<script>
import urijs from 'urijs'

URI = urijs.URI
export default {
  data() {
    return {
      error: false,
      name: '',
      vendor_id: '',
      redirect_uri: '',
      scope: '',
      state: ''
    }
  },
  mounted() {
    return q.fcall(function () {
      //get name based on web or app redirect
      let redirectUri = new URI(this.$route.query.redirect_uri);
      if (redirectUri.protocol() === 'https' || redirectUri.protocol() === 'http') {
        this.name = redirectUri.domain();
      } else {
        this.name = redirectUri.protocol();
      }
      //set values
      this.vendor_id = this.$route.query.vendor_id;
      this.redirect_uri = this.$route.query.redirect_uri;
      this.scope = _.intersection(config.VENDOR_SCOPE, _.split(this.$route.query.scope, ','));
      this.state = this.$route.query.state;
      //validate data
      if (!(this.name && this.vendor_id && this.redirect_uri && this.scope.length > 0 && this.state)) throw 'invalid query parameters';
    }).catch(function (error) {
      this.error = true;
    });
  },
  methods: {
    newVendorAccessToken() {
      return this.$store.dispatch('request', {
        url: 'newVendorAccessToken',
        query: {
          holder: this.vendor_id,
          redirect_uri: this.redirect_uri,
          scope: this.scope
        }
      }).then(function (data) {
        let redirectUri = new URI(this.redirect_uri).fragment('').removeSearch(['accessToken', 'state']);
        redirectUri.addSearch({
          accessToken: data.accessToken,
          state: this.state
        });
        window.location.replace(redirectUri.toString());
      }).catch(function (error) {
        toastr.error('Failed to authorize');
      });
    }
  }
}
</script>

<style lang="sass" scoped>
#oauth
    background-color: #e9ecef
</style>
