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
      address: ""
    };
  },
  methods: {
    //  获取地点
    getAddress() {
      const history = getHistoryLocal();
      const addressInfo = history[0];
      this.$axios.get(`/v2/pois/${addressInfo.geohash}`).then(res => {
        this.address = res.data.name;
      });
    },
    // 去定位城市页
    toChooseCity() {
      this.$router.push({ path: "/city" });
    },
    // 去搜索页
    toSearch() {
      this.$router.push({ path: "/elm/search" });
    }
  },
  mounted() {
    this.getAddress();
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/elm/home/home.less");
</style>