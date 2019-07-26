import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import City from 'models/geo/City'
// main
// -------------------------------------------------------------------------------------
export default class Province extends Model {
  static entity = 'province'
  static fields() {
    return {
            id                            : this.attr(null),
            name                          : this.string(''),
    }
  }
}
