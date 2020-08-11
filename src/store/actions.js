import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqLogin_pwd,
  reqUserinfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchFood
} from "../Api";
import { call } from "file-loader";
export default {
  //得到位置
  async getAddress({ commit, state }) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit("setAddress", { address });
    }
  },
  //图片轮播
  async getFoodTypes({ commit }) {
    const result = await reqFoodTypes();
    if (result.code === 0) {
      const foodTypes = result.data;
      commit("setFoodTypes", { foodTypes });
    }
  },
  //商家信息
  async getShops({ commit, state }) {
    const { latitude, longitude } = this;
    const result = await reqShops(latitude, longitude);
    if (result.code === 0) {
      const shops = result.data;
      commit("setShops", { shops });
    }
  },
  //设置全局用户名
  getUserInfo({ commit }, userInfo) {
    commit("setUser", { userInfo });
  },
  //得到以前的用户名
  async getOldUser({ commit }) {
    const result = await reqUserinfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit("setOldUser", { userInfo });
    }
  },
  async getLogout({ commit }) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit("setLogout");
    }
  },
  async getShopGoods({ commit },callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit("setShopGoods", { goods });
    }
    callback && callback()
  },
  async getShopRatings({ commit }) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit("setShopRatings", { ratings });
    }
  },
  async getShopInfo({ commit },callback) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit("setShopInfo", { info });
      callback && callback()
    }
  },
  updateFoodCount({commit},{bol,food}){
    if(bol){
      commit('addCount',{food})
    }else{
      commit('reduceCount',{food})
    }
  },
  clearAll({commit}){
    commit('clearAll')
  },
  async searchFood({commit,state},keyword){
    const geohash = state.latitude + "," + state.longitude;
    const result =await reqSearchFood(geohash,keyword)
    if(result.code===0){
      const searchShops=result.data
      commit('setSearchFood',{searchShops})
    }
  }
};
