import {Model} from '@vuex-orm/core'
// import related models
// -------------------------------------------------------------------------------------
import User from 'models/users/User'
import Area from 'models/geo/Area'
// main
// -------------------------------------------------------------------------------------
export default class Address extends Model {
  static entity = 'address'
  static fields() {
    return {
            id                            : this.attr(null),
            user                          : this.belongsTo(User, 'userId'),
            area                          : this.belongsTo(Area, 'areaId'),
            street                        : this.string(''),
    }
  }
}
