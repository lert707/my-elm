<template>
    <div class="container">
      <!-- 顶部的开始 -->
      <div class="header">
        <div class="left" @click="toBack">back</div>
        <div class="center">{{city.name}}</div>
        <div class="right" @click="toHome">切换城市</div>
      </div>
      <!-- 顶部的结束 -->
      <!-- 搜索栏的开始 -->
      <div class="search-box">
        <div class="search">
          <input class="search-input" v-model="searchValue" type="text" placeholder="输入学习、商务楼、地址">
        </div>
        <div class="search-btn" @click="searchAddress">提交</div>
      </div>
      <!-- 搜索栏的结束 -->
      <!-- 搜索历史的开始 -->
      <p class="history-title" v-show="searchResultData.length == 0">搜索历史</p>
      <div class="search-result">
        <div class="item" @click="chooseAddress(item)" v-show="searchResultData.length != 0" v-for="item in searchResultData" :key="item.id">
          <p class="name">{{item.name}}</p>
          <p class="address">{{item.address}}</p>
        </div>
      </div>
      <div class="history">
        <div class="item" @click="chooseAddress(item)" v-show="searchResultData.length == 0" v-for="item in historyData" :key="item.id">
          <p class="name">{{item.name}}</p>
          <p class="address">{{item.address}}</p>
        </div>
        <p class="clear-history" @click="clearHistory" v-show="historyData.length != 0">清空搜索记录</p>
      </div>
      <!-- 搜索历史的结束 -->
    </div>
</template>

<script>
import {getHistoryLocal, addHistoryLocal, clearHistoryLocal} from '@/utils/localStorageUtils.js';
export default {
  data() {
    return {
      city: '', // 选择的城市
      searchValue: '', // 搜索地址
      searchResultData: [], // 搜索结果
      historyData: [], // 历史记录
    };
  },
  methods: {
    // 获取选择的城市
    getCity() {
      this.$axios.get(`v1/cities/${this.$route.query.cityId}`).then(res => {
        this.city = res.data;
      });
    },
    // 去上一页
    toBack() {
      this.$router.go(-1);
    },
    // 去选择城市页
    toHome() {
      this.$router.push({ path: "home" });
    },
    // 搜索地址
    searchAddress() {
      this.$axios.get(`/v1/pois?city_id=${this.$route.query.cityId}&keyword=${this.searchValue}&type=search`).then(res => {
        this.searchResultData = res.data
      })
    },
    // 选择地址
    chooseAddress(address) {
      this.searchValue = ''
      this.searchResultData = []
      this.historyData.unshift(address)
      addHistoryLocal(address);
      // 跳转至商品页
      this.$router.push({path: '/elm/home', query: {address: JSON.stringify(address)}})
    },
    // 清空历史记录
    clearHistory() {
      clearHistoryLocal();
      this.initHistory();
    },
    // 初始化搜索历史
    initHistory() {
      this.historyData = getHistoryLocal();
    }
  },
  mounted() {
    this.getCity();
    this.initHistory();
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/address/address.less");
</style>