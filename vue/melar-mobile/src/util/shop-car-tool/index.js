import VueDB from 'util/vue-db/vue-db-long'

let DB = new VueDB()

class ShopCarTool{
  constructor(store){
    let shopCar = DB.getItem('shop-car').toJson()
    if(!shopCar){
      DB.setItem('shop-car', JSON.stringify(shopCar = {}))
    }

    this.$store = store
    this.shopCarDB = shopCar
  }

  upData() {
    DB.setItem('shop-car', JSON.stringify(this.shopCarDB))
    this.$store.commit('setShopCarLength', this.length())
  }

  // 添加商品，添加重复的会自动累加数量
  add( value ) {

    let key = value.id

    if(!key){
      return
    }



    if(this.shopCarDB[key]){
      this.shopCarDB[key].length+=1
    }else{
      // 过滤需要的信息
      let filter = {}

      // 需要的信息列表
      let filterResout = ['title', 'money', 'id']

      for(let i=0; i<filterResout.length; i++){
        let innreKey = filterResout[i]
        filter[innreKey] = value[innreKey]
      }
      filter.img = value.banner[0] ? value.banner[0].src : '' // 取一张商品图片
      filter.link = '/detail/'+value.id
      filter.length = 1

      this.shopCarDB[key] = filter
    }

    this.upData()
  }

  // 减去一个商品，如果数量为零则删除该商品
  minus( value ) {
    let key = value.id

    if(!key){
      return
    }

    if(this.shopCarDB[key]){
      this.shopCarDB[key].length-=1
      if(this.shopCarDB[key].length <= 0){
        this.remove(key)
      }

      this.upData()
    }
  }

  // 删除整个商品
  remove(key) {
    this.shopCarDB[key].length = 0
    
    delete this.shopCarDB[key]
    this.upData()
  }
  // 删除所有商品
  removeAll() {
    this.shopCarDB = {}
    this.upData()
  }
  // 获取单个数据
  get(key) {
    return this.shopCarDB[key]
  }
  // 获取全部数据
  getAll(){
    return this.shopCarDB
  }
  // 设置单个数据里的某一个字段
  set(parentKey, key, value) {
    if(this.shopCarDB[parentKey]){
      this.shopCarDB[parentKey][key] = value
      this.upData()
    }
  }
  setLength(key, value){
    if( this.shopCarDB[key] ){
      this.shopCarDB[key].length = value
    }
    this.upData()
  }
  length() {
    let n = 0;
    for(let i in this.shopCarDB){
      n += this.shopCarDB[i].length
    }
    return n
  }

}


export default ShopCarTool
