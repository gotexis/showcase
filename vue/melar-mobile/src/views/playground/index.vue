<template lang="pug">
.root
    .item
        a(@click="func1") Function 1
    .item
        a(@click="func2") Function 2
    .item
        a.name(@click="func3") Function 3
    .item
        a.name(@click="func4") Function 4
    .item
        a.name(@click="func5") Function 5

    p {{areas}}
    p {{ cities }}
</template>

<script>
import {mapGetters} from "vuex"
import Listing from "models/core/Listing"
import Item from "models/core/Item"
import gql from "graphql-tag";
import store from "store"
import {ListMixin} from "../../mixins/crud"
// import QueryBuilder from '@vuex-orm/plugin-graphql/dist/lib/graphql/query-builder'
// import VuexOrm from '@vuex-orm/plugin-graphql'

const fragmentedQuery = gql`
    fragment areaConnection on AreaConnection {
      edges {
        node {
          id
          name
        }
      }
    }

    fragment areaSet on City {
      areaSet {
        ...areaConnection
      }
    }

    query Cities {
      cities(name_Icontains: "德") {
        edges {
          node {
            id
            name
            province {
              name
            }
            ...areaSet
          }
        }
      }
    }
`

console.log(fragmentedQuery)

export default {
  name: 'playground',
  mixins: [ListMixin],
  computed: {
    ...mapGetters("Models/category", {
      categories: 'all',
    }),
    ...mapGetters("Models/user", {
      users: 'all',
    }),
    ...mapGetters("Models/item", {
      users: 'all',
    }),
  },
  components: {},
  apollo: {
    // Query with parameters
    cities: {
      // gql query
      query: fragmentedQuery,
    },
  },
  data() {
    return {}
  },
  methods: {
    func1() {
      console.log('func1')

      Item.insert({data: item})

    },
    func2() {
      console.log('func2')

      Item.create({data: item})
    },
    func3() {
      console.log('func3')
      // const fields = QueryBuilder.buildRelationsQuery(context.getModel("post"), ["post"]);
      const extra_args = {}
      // https://github.com/graphql-python/graphene/issues/416 Cursor and pagination
      const categories_query = gql`
        query Categories($first: Int, $after: String) {
          categories(first: $first) {
            edges {
              node {
                id
                name
              }
              # cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      `
      // const variables = {first: 100}
      const variables = {first: null}
      let a = {}
      // a['result'] = 1
      // console.log(a)
      this.simpleQuery(categories_query, variables).then(result => {
        a['result'] = result
        console.log(a)
      })

      // console.log(a)
      // console.log(a.result)
      // console.log(a['result'])
    },
    func4() {
      // console.log('func4')
    },
    func5() {

      console.log('func5')
    },
    // generic way to dispatch a query with VueXorm-GraphQL
    async simpleQuery(query, variables, bypassCache = true) {
      const result = await store.dispatch('Models/simpleQuery',
        {query, variables, bypassCache},
        {root: true}, // commit to global module (because we are in sub-module, need to add this ! DON'T REMOVE)
      ) // => {tokenAuth: {token: ...}}
      return result
    },
  }
}
</script>

<style scoped lang="sass">
.item a
    cursor: pointer

</style>
