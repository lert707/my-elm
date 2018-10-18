<template>
    <div class="container">
        <!-- 头部的开始 -->
        <div class="header">
            <div class="logo">
                <span>ele.me</span>
            </div>
            <div class="options">
                <span class="login-btn">登录</span>
                <span class="register-btn">注册</span>
            </div>
        </div>
        <!-- 头部的结束 -->
        <!-- 当前定位城市的开始 -->
        <div class="current-city">
            <div class="title">
                <span class="name">当前定位城市：</span>
                <span class="desc">定位不准时，请在定位列表中选择</span>
            </div>
            <div class="city" @click="chooseCity(currentCity.id)">
                <span class="name">{{currentCity.name}}</span>
            </div>
        </div>
        <!-- 当前定位城市的结束 -->
        <!-- 热门城市的开始 -->
        <div class="hot-city">
            <div class="title">热门城市</div>
            <div class="item-list">
                <div class="item" @click="chooseCity(item.id)" v-for="item in hotCityData" :key="item.id">{{item.name}}</div>
            </div>
        </div>
        <!-- 热门城市的结束 -->
        <!-- 城市列表的开始 -->
        <div class="city-list" v-for="(item, title) in allCityData" :key="title">
            <div class="title"> 
                <span>{{title}}</span>
                <span v-if="title == 'A'">(按字母排序)</span>    
            </div>
            <div class="item-list">
                <div class="item" @click="chooseCity(city.id)" v-for="(city, index) in item" :key="index">{{city.name}}</div>
            </div>
        </div>
        <!-- 城市列表的结束 -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentCity: [], // 当前城市
      hotCityData: [], // 热门城市
      allCityData: [] // 所有城市
    };
  },
  methods: {
    // 初始化数据
    getInitCity() {
      // 获取定位城市
      this.$axios.get("/v1/cities?type=guess").then(res => {
          this.currentCity = res.data;
        });
      // 获取热门城市
      this.$axios.get("/v1/cities?type=hot").then(res => {
        this.hotCityData = res.data;
      });
      // 获取所有城市
      setTimeout(() => {
        this.$axios.get("/v1/cities?type=group").then(res => {
            const keyData = []
            for(let key in res.data){
                keyData.push(key)
            }
            keyData.sort()
            const cityData = {}
            for(let value of keyData){
                cityData[value] = (res.data)[value]
            }
            this.allCityData = cityData;
        });
      }, 1000)
    },
    // 选择城市
    chooseCity(cityId) {
        this.$router.push({path: '/address', query: {cityId}})
    }
  },
  mounted() {
    this.getInitCity();
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/city/city.less");
</style>