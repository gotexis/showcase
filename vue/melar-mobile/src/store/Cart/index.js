import ShopCarTool from "util/shop-car-tool"

let CartTool = new ShopCarTool()

const Cart = { // 购物车
  state: {
    length: CartTool.length()
  },
  mutations: {
    setShopCarLength(state, length) {
      state.length = length
    }
  },
  getters: {
    getShopCarLength: state => {
      return state.length
    }
  }
}

export default Cart
