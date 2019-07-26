import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Item from 'models/core/Item'
import User from 'models/users/User'
// main
// -------------------------------------------------------------------------------------
export default class Cart extends Model {
  static entity = 'cart'
  static fields() {
    return {
            id                            : this.attr(null),
            user                          : this.belongsTo(User, 'userId'),
            item                          : this.belongsTo(Item, 'itemId'),
            quantity                      : this.number(0),
    }
  }
}
