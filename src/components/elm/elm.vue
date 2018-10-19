<template>
  <div class="elm">
    <router-view></router-view>
    <div class="bottom">
      <div class="home" @click="toHome" :class="{'active': active == 'home'}">
        <span>外卖</span>
      </div>
      <div class="search" @click="toSearch" :class="{'active': active == 'search'}">
        <span>搜索</span>
      </div>
      <div class="order" @click="toOrder" :class="{'active': active == 'order'}">
        <span>订单</span>
      </div>
      <div class="my" @click="toMy" :class="{'active': active == 'my'}">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    };
  },
  watch: {
    // 监听路由变化
    $route(newValue, oldValue) {
      this.active = newValue.name
    },
  },
  methods: {
    // 去elm首页
    toHome() {
      this.$router.push({ path: "/elm/home" });
    },
    // 去搜索页
    toSearch() {
      this.$router.push({ path: "/elm/search" });
    },
    // 去订单页
    toOrder() {
      this.$router.push({ path: "/elm/order" });
    },
    // 去我的页
    toMy() {
      this.$router.push({ path: "/elm/my" });
    },
    // tab栏高亮
    initActive() {
      this.active = this.$route.name
    }
  },
  mounted() {
    this.initActive()
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/elm/elm.less");
</style>