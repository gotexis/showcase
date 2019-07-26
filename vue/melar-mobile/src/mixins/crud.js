import gql from "graphql-tag"


const BaseMixin = {
  model: null,  // VueX_ORM ? string ?
  get_action() {
    return this.action_type
  },
  apolloQueries: {
    FeedQuery: gql`
      {
        users {
          ...namename
        }
      }
      fragment namename on User {
        name
        id
      }
    `
  },

  apollo: {
    // Query with parameters
    areas: {
      // gql query
      query: gql`
        query areas {
          areas(first: 3) {
            edges {
              node {
                id
                name
              }
            }
          }
        }`,
    },
  },
}

const CreateMixin = {
  ...BaseMixin,
  action_type: 'create',
  data() {
    return {
      object: {}
    }
  },
}

const UpdateMixin = {
  ...BaseMixin,
  action_type: 'update',
  data() {
    return {
      object: {}
    }
  },
}

const DetailMixin = {
  ...BaseMixin,
  action_type: 'detail',
  data() {
    return {
      object: {}
    }
  },
  created() {
    console.log('mixin hook called')
  }
}

const DeleteMixin = {
  action_type: 'delete',
  ...BaseMixin,
  data() {
    return {
      object: {}
    }
  },
  created() {
    console.log('mixin hook called')
  }
}

const ListMixin = {
  action_type: 'list',
  ...BaseMixin,
  data() {
    return {
      // similar to get_context_data()
      object_list: {}
    }
  },
  func() {
    return 'a'
  },
  created() {
    console.log('mixin hook called')
  }
}

export {
  CreateMixin,
  UpdateMixin,
  DetailMixin,
  DeleteMixin,
  ListMixin,
}
