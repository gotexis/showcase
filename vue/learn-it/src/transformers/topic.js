const publicPath = process.env.NODE_ENV === 'production'
  ? "/learn-it/"
  : '/build/'

export default function(topic) {
  return {
    id: topic.id,
    title: topic.title,
    score: topic.score,
    site: topic.site || null,
    logo: publicPath + 'icons/$1.svg'.replace(/\$1/, topic.id),
    color: topic.color
  }
}
