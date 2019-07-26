import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import User from 'models/users/User'
import OrderItem from 'models/core/OrderItem'
import Order from 'models/core/Order'
import Listing from 'models/core/Listing'
import Cart from 'models/core/Cart'
// main
// -------------------------------------------------------------------------------------
export default class Item extends Model {
  static entity = 'item'
  static fields() {
    return {
            id                            : this.attr(null),
            listing                       : this.belongsTo(Listing, 'listingId'),
            name                          : this.string(''),
            description                   : this.string(''),
            priceCurrency                 : this.string(''),
            price                         : this.attr(null),    // uncatched
    }
  }
}
