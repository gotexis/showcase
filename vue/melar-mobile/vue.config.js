const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/melar-demo/'
    : '/',

  configureWebpack: {
    resolve: {
      modules: [
        path.resolve("./src"),          // add src here to resolve src folder.
        path.resolve("./node_modules")  // beware, shouldn't conflict with node_modules
      ],
    },
    devtool: 'source-map',                            // for debugging, pausing, mapping

    // for TypeScript
    // entry: './src/main.ts',

  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module                                    // .GraphQL files
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()

    config.module                                    // .GraphQL files
      .rule('ts')
      .test(/\.tsx?$/)
      .use('ts-loader')
      .loader('ts-loader')
      .end()
  },
}
