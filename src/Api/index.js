/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */

import ajax from "./ajax";
const BASE_URL = "/api";

// 1、根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`);
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL + "/index_category");
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) =>
  ajax(BASE_URL + "/shops", { longitude, latitude });
//[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchFood=(geohash,keyword)=>ajax(BASE_URL+"//search_shops",{geohash,keyword})
//[5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(BASE_URL + "/captcha");
//[6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLogin_pwd = ({ name, pwd, captcha }) =>ajax(BASE_URL + "/login_pwd", { name, pwd, captcha },"post");
//[7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendcode = phone => ajax(BASE_URL + "/sendcode", phone);
//[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLogin_sms = ({ phone, code }) =>
  ajax(BASE_URL + "/login_sms", { phone, code },"post");
//[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax(BASE_URL + "/userinfo");
//[10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE_URL + "/logout");

//[11.获取商家头部信息]
export const reqShopGoods=()=>ajax('/goods');

//[12.获取商家分类列表信息]
export const reqShopRatings=()=>ajax('/ratings')

//[13.获取商家每类商品信息]
export const reqShopInfo=()=>ajax('/info')
