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
            <div class="city">
                <span class="name">{{currentCity}}</span>
            </div>
        </div>
        <!-- 当前定位城市的结束 -->
        <!-- 热门城市的开始 -->
        <div class="hot-city">
            <div class="title">热门城市</div>
        </div>
        <!-- 热门城市的结束 -->
    </div>
</template>

<script>
export default {
  data() {
    return {
        currentCity: ''
    };
  },
  methods: {
    getCurrentCity() {
      this.$axios
        .get("https://elm.cangdu.org/v1/cities?type=guess")
        .then(res => {
          console.log(res);
          this.currentCity = res.data.name
        });
    }
  },
  mounted() {
    this.getCurrentCity();
  }
};
</script>

<style scoped lang='less'>
@import url('~@css/home/home.less');
</style>