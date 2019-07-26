import { Database } from '@vuex-orm/core'
// users
import User                 from 'models/users/User'
// core
import Domain               from 'models/core/Domain'
import Shop                 from 'models/core/Shop'
import Category             from 'models/core/Category'
import Image                from 'models/core/Image'
import Listing              from 'models/core/Listing'
import Item                 from 'models/core/Item'
import ListingImage         from 'models/core/ListingImage'
import Cart                 from 'models/core/Cart'
import Order                from 'models/core/Order'
import OrderItem            from 'models/core/OrderItem'
// geo
import Province             from 'models/geo/Province'
import City                 from 'models/geo/City'
import Area                 from 'models/geo/Area'
import Address              from 'models/geo/Address'
const database = new Database()
// users
database.register(User)
// core
database.register(Domain)
database.register(Shop)
database.register(Category)
database.register(Image)
database.register(Listing)
database.register(Item)
database.register(ListingImage)
database.register(Cart)
database.register(Order)
database.register(OrderItem)
// geo
database.register(Province)
database.register(City)
database.register(Area)
database.register(Address)
export default database
