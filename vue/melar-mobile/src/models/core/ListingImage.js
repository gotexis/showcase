import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Listing from 'models/core/Listing'
import Image from 'models/core/Image'
// main
// -------------------------------------------------------------------------------------
export default class ListingImage extends Model {
  static entity = 'listingImage'
  static fields() {
    return {
            id                            : this.attr(null),
            listing                       : this.belongsTo(Listing, 'listingId'),
            image                         : this.belongsTo(Image, 'imageId'),
            isCover                       : this.boolean(false),
    }
  }
}
