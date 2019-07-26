const env = (process.env.NODE_ENV === 'production') ? require('../.env.production') : require('../.env.production')
const baseUri = 'https://www.googleapis.com/youtube/v3'
const apiKey = env.YOUTUBE_API_KEY
const title = 'Learn it, Learn IT! Got it?'
const tweet = encodeURIComponent(title)

const publicPath = process.env.NODE_ENV === 'production'
  ? ""
  : '/build/'

export default {
  app: {
    name: 'Learn IT!',
    url: 'https://gotexis.github.io/learn-it/',
    title: title,
    description: 'Web Learn is an open source service which provides simple access to thousands of video lessons on web developing and programming.',
    author: 'Exis',
    logo: {
      normal: publicPath + 'images/logo.svg',
      mini: publicPath + 'images/logo-mini.svg',
      share: publicPath + 'images/weblearn-banner.png'
    },
    github: {
      username: 'gotexis',
      repo: 'gotexis/showcase'
    },
    twitter: {
      username: 'gotexis',
      tweet: tweet
    },
    links: [
      '<a class="github-button" href="https://github.com/gotexis/learn-it" data-count-href="/gotexis/learn-it/stargazers" data-count-api="/repos/gotexis/learn-it#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star gotexis/learn-it on GitHub">Star</a>',
      '<a class="twitter-follow-button" href="https://twitter.com/exis">Follow @exis</a>',
      // '<a class="twitter-share-button" data-via="exis" href="https://twitter.com/intent/tweet?text=' + tweet + '">Tweet</a>'
    ]
  },
  api: {
    key: apiKey,
    search: {
      endpoint: baseUri + '/search',
      params: {
        key: apiKey,
        part: 'snippet',
        videoEmbeddable: true,
        safeSearch: 'strict',
        fields: 'prevPageToken,nextPageToken,items/id/videoId'
      }
    },
    videos: {
      endpoint: baseUri + '/videos',
      params: {
        key: apiKey,
        part: 'contentDetails,snippet,statistics',
        fields: 'items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,tags,thumbnails,title),statistics(dislikeCount,likeCount,viewCount)),nextPageToken,prevPageToken'
      }
    },
    channels: {
      endpoint: baseUri + '/channels',
      params: {
        key: apiKey,
        part: 'snippet,statistics,brandingSettings'
      }
    }
  }
}
