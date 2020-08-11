import Vue from 'vue'

export default {
  setAddress(state,{address}) {
    state.address=address
  },
  setFoodTypes(state,{foodTypes}) {
    state.foodTypes=foodTypes
  },
  setShops(state,{shops}) {
    state.shops=shops
  },
  setUser(state,{userInfo}){
    state.userInfo=userInfo
  },
  setOldUser(state,{userInfo}){
    state.userInfo=userInfo
  },
  setLogout(state){
    state.userInfo={}
  },
  setShopGoods(state,{goods}){
    state.goods=goods
  },
  setShopRatings(state,{ratings}){
    state.ratings=ratings
  },
  setShopInfo(state,{info}){
    state.info=info
  },
  addCount(state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  reduceCount(state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  clearAll(state){
    state.cartFoods.forEach((food)=>food.count=0)
    state.cartFoods=[]
  },
  setSearchFood(state,{searchShops}){
    state.searchShops=searchShops
  }
};
