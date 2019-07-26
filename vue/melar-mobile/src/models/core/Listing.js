import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Shop from 'models/core/Shop'
import ListingImage from 'models/core/ListingImage'
import Item from 'models/core/Item'
import Category from 'models/core/Category'
import Image from 'models/core/Image'
// main
// -------------------------------------------------------------------------------------
export default class Listing extends Model {
  static entity = 'listing'
  static fields() {
    return {
            id                            : this.attr(null),
            category                      : this.belongsTo(Category, 'categoryId'),
            shop                          : this.belongsTo(Shop, 'shopId'),
            name                          : this.string(''),
            description                   : this.string(''),
            isActive                      : this.boolean(false),
            image                         : this.belongsToMany(Image, ListingImage, 'listingId' , 'imageId'),
    }
  }
}
