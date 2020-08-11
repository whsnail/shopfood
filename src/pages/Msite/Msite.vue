<!--  -->
<template>
  <section class="msite">
    <!--首页头部-->
    <head-top :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <router-link class="header_login" slot="right" :to="userInfo._id?'/selfInfo':'/toLogin'">
        <span class="header_login_text" v-if="!userInfo._id">登录/注册</span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </head-top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(foodTypesn,index) in foodTypesArr" :key="index">
            <span
              href="javascript:"
              class="link_to_food"
              v-for="(foodType,index) in foodTypesn"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl+foodType.image_url" />
              </div>
              <span>{{foodType.title}}</span>
            </span>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <shop-list></shop-list>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import HeadTop from "../../components/HeadTop/HeadTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  mounted() {
    this.$store.dispatch("getFoodTypes");
    this.$store.dispatch("getShops");
  },
  components: {
    HeadTop,
    ShopList
  },
  watch: {
    foodTypesArr() {
      this.$nextTick(() => {
        // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
        // 创建一个Swiper实例对象, 来实现轮播
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  computed: {
    ...mapState(["address", "foodTypes",'userInfo']),
    foodTypesArr() {
      const { foodTypes } = this;
      const foodTypesArr = [];
      let foodTypesn = [];
      foodTypes.forEach(item => {
        if (foodTypesn.length === 8) {
          foodTypesn = [];
        }
        if (foodTypesn.length === 0) {
          foodTypesArr.push(foodTypesn);
        }
        foodTypesn.push(item);
      });
      return foodTypesArr;
    }
  },
  methods: {}
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

    .header_search {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;

      .icon-sousuo {
        font-size: 25px;
        color: #fff;
      }
    }

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }

    .header_login {
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      .header_login_text {
        color: #fff;
      }
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>