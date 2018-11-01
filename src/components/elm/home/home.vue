<template>
  <div class="home">
    <div class="header">
      <div class="search" @click="toSearch">搜索</div>
      <div class="address" @click="toChooseCity">{{address}}</div>
      <div class="options">
          <span class="login-btn">登录</span>
          <span class="register-btn">注册</span>
      </div>
    </div>
    <div class="container">
      <!-- <div class="category-list">
          <div class="left">
            <div class="item" v-if="index < 8" v-for="(item, index) in categoryData" :key="item.id">
              <img class="item-image" :src="'https://fuss10.elemecdn.com' + item.image_url" alt="">
              <span>{{item.title}}</span>
            </div>
          </div>
          <div class="right">
            <div class="item" v-if="index > 8" v-for="(item, index) in categoryData" :key="item.id">
              <img class="item-image" :src="'https://fuss10.elemecdn.com' + item.image_url" alt="">
              <span>{{item.title}}</span>
            </div>         
          </div>
      </div> -->
      <swiper class="test" :auto="0">
        <swiper-item class="left">
          <div class="item" v-if="index < 8" v-for="(item, index) in categoryData" :key="item.id">
            <img class="item-image" :src="'https://fuss10.elemecdn.com' + item.image_url" alt="">
            <span>{{item.title}}</span>
          </div>
        </swiper-item>
        <swiper-item class="right">
            <div class="item" v-if="index > 8" v-for="(item, index) in categoryData" :key="item.id">
              <img class="item-image" :src="'https://fuss10.elemecdn.com' + item.image_url" alt="">
              <span>{{item.title}}</span>
            </div>
        </swiper-item>
      </swiper>
      <div class="stores">
        <p class="title">附近商家</p>
        <div class="store" v-for="item in storeData" :key="item.id">
          <img class="store-img" :src="'http://elm.cangdu.org/img/'+ item.image_path" alt="">
          <div class="info">
            <div class="one">
              <span class="name">{{item.name}}</span>
              <span class="tip">保准票</span>
            </div>
            <div class="two">
              <span class="desc">{{item.rating}} 月售{{item.recent_order_num}}单</span>
              <span class="tip">{{item.delivery_mode.text}} 准时达</span>
            </div>
            <div class="three">
              <span class="desc">20起送 {{item.piecewise_agent_fee.tips}}</span>
              <span class="tip">{{item.distance}}/{{item.order_lead_time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import { getHistoryLocal } from "@/utils/localStorageUtils.js";
export default {
  data() {
    return {
      address: "", // 标题
      categoryData: [], // 分类数据
      storeData: [] // 商铺数据
    };
  },
  components: {
    swiper: Swipe,
    swiperItem: SwipeItem
  },
  methods: {
    // 去定位城市页
    toChooseCity() {
      this.$router.push({ path: "/city" });
    },
    // 去搜索页
    toSearch() {
      this.$router.push({ path: "/elm/search" });
    },
    // 初始化数据
    initData() {
      // 获取地址
      const history = getHistoryLocal();
      const addressInfo = history[0];
      this.$axios.get(`/v2/pois/${addressInfo.geohash}`).then(res => {
        this.address = res.data.name;
      });
      // 获取分类
      this.$axios.get("/v2/index_entry").then(res => {
        this.categoryData = res.data;
      });
      // 获取商铺信息
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${addressInfo.latitude}&longitude=${
            addressInfo.longitude
          }`
        )
        .then(res => {
          this.storeData = res.data;
          this.storeData.forEach(e => {
            if (!e.delivery_mode) {
              e.delivery_mode = {};
              e.delivery_mode.text = "";
            }
          });
        });
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/elm/home/home.less");
</style>