import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Shop from 'models/core/Shop'
// main
// -------------------------------------------------------------------------------------
export default class Domain extends Model {
  static entity = 'domain'
  static fields() {
    return {
            id                            : this.attr(null),
            domain                        : this.string(''),
    }
  }
}
