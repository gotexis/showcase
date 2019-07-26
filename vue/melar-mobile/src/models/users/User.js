import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Shop from 'models/core/Shop'
import Item from 'models/core/Item'
import Order from 'models/core/Order'
import Address from 'models/geo/Address'
import Cart from 'models/core/Cart'
// main
// -------------------------------------------------------------------------------------
export default class User extends Model {
  static entity = 'user'
  static fields() {
    return {
            id                            : this.attr(null),
            lastLogin                     : this.string(''),    // defaulting to str as of now...
            username                      : this.string(''),
            firstName                     : this.string(''),
            lastName                      : this.string(''),
            email                         : this.string(''),
            dateJoined                    : this.string(''),    // defaulting to str as of now...
            shop                          : this.belongsTo(Shop, 'shopId'),
            name                          : this.string(''),
            item                          : this.belongsToMany(Item, Cart, 'userId' , 'itemId'),
    }
  }
}
