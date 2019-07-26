import Vue from 'vue'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import store from "../store";


export const getHeaders = () => {
  let header = {}

  if (store.state.Auth.token) {
    header['AUTHORIZATION'] = `JWT ${store.state.Auth.token}`
  }
  return header
}


const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1/graphql/',
  credentials: 'include',
  headers: getHeaders,
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloProvider
