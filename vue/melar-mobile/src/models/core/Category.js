import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Listing from 'models/core/Listing'
// main
// -------------------------------------------------------------------------------------
export default class Category extends Model {
  static entity = 'category'
  static fields() {
    return {
            id                            : this.attr(null),
            name                          : this.string(''),
    }
  }
}
