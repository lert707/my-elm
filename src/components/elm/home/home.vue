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
      <div class="category-list">
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
      </div>
        <p>header</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>bottom</p>
    </div>
  </div>
</template>

<script>
import { getHistoryLocal } from "@/utils/localStorageUtils.js";
export default {
  data() {
    return {
      address: "", // 标题
      categoryData: [] // 分类数据
    };
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