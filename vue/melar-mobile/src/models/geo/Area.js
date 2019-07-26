import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Address from 'models/geo/Address'
import City from 'models/geo/City'
// main
// -------------------------------------------------------------------------------------
export default class Area extends Model {
  static entity = 'area'
  static fields() {
    return {
            id                            : this.attr(null),
            city                          : this.belongsTo(City, 'cityId'),
            name                          : this.string(''),
    }
  }
}
