import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import User from 'models/users/User'
import Image from 'models/core/Image'
import Domain from 'models/core/Domain'
import Listing from 'models/core/Listing'
// main
// -------------------------------------------------------------------------------------
export default class Shop extends Model {
  static entity = 'shop'
  static fields() {
    return {
            id                            : this.attr(null),
            domain                        : this.belongsTo(Domain, 'domainId'),
            name                          : this.string(''),
    }
  }
}
