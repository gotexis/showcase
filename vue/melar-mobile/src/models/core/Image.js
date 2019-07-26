import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Listing from 'models/core/Listing'
import Shop from 'models/core/Shop'
import ListingImage from 'models/core/ListingImage'
// main
// -------------------------------------------------------------------------------------
export default class Image extends Model {
  static entity = 'image'
  static fields() {
    return {
            id                            : this.attr(null),
            shop                          : this.belongsTo(Shop, 'shopId'),
            image                         : this.attr(null),    // uncatched
    }
  }
}
