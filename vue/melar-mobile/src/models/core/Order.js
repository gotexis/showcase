import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Item from 'models/core/Item'
import OrderItem from 'models/core/OrderItem'
import User from 'models/users/User'
// main
// -------------------------------------------------------------------------------------
export default class Order extends Model {
  static entity = 'order'
  static fields() {
    return {
            id                            : this.attr(null),
            user                          : this.belongsTo(User, 'userId'),
            lastModified                  : this.string(''),    // defaulting to str as of now...
            item                          : this.belongsToMany(Item, OrderItem, 'orderId' , 'itemId'),
    }
  }
}
