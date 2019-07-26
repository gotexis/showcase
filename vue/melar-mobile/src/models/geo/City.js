import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import Area from 'models/geo/Area'
import Province from 'models/geo/Province'
// main
// -------------------------------------------------------------------------------------
export default class City extends Model {
  static entity = 'city'
  static fields() {
    return {
            id                            : this.attr(null),
            province                      : this.belongsTo(Province, 'provinceId'),
            name                          : this.string(''),
    }
  }
}
