<template>
  <div class="search">
    <div class="header">
      <div class="back" @click="toBack">back</div>
      <div class="title">搜索</div>
    </div>
    <div class="container">
      <div class="search-box">
        <input class="search-input" v-model="searchValue" type="text" placeholder="请输入商家或美食名称">
        <div class="search-btn" @click="searchResult">提交</div>
        <div class="search-clear" @click="clearSearch" v-show="searchValue">x</div>
      </div>
      <div class="tips" v-show="resultData.length != 0">啊哦，没有查询到该商家或美食</div>
    </div>
  </div>
</template>

<script>
import { getHistoryLocal } from "@/utils/localStorageUtils.js";

export default {
  data() {
    return {
      searchValue: '', // 搜索框
      resultData: [] // 搜索结果
    };
  },
  methods: {
    // 去上一页
    toBack() {
      this.$router.go(-1);
    },
    // 清空搜索栏
    clearSearch() {
      this.searchValue = ''
    },
    // 搜索结果
    searchResult() {
      const history = getHistoryLocal();
      const addressInfo = history[0];
      this.$axios.get(`/v4/restaurants?geohash=${addressInfo.geohash}&keyword=${this.searchValue}`).then(res => {
        this.resultData = res.data
      })
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/elm/search/search.less");
</style>