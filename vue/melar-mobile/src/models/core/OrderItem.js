import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Item from 'models/core/Item'
import Order from 'models/core/Order'
// main
// -------------------------------------------------------------------------------------
export default class OrderItem extends Model {
  static entity = 'orderItem'
  static fields() {
    return {
            id                            : this.attr(null),
            order                         : this.belongsTo(Order, 'orderId'),
            item                          : this.belongsTo(Item, 'itemId'),
            quantity                      : this.number(0),
            subtotalCurrency              : this.string(''),
            subtotal                      : this.attr(null),    // uncatched
    }
  }
}
