<template>
    <div class="restaurant-detail">
      <div class="header">
        <img class="bg-img" src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
        <div class="info">
          <img class="logo" src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
          <div class="desc">
            <p class="name">效果演示</p>
            <p class="dispatch">商家配送/</p>
            <p class="notice">公告：</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        restaurantInfo: [], // 商铺信息
        categoryData: [], // 食品分类数据
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`https://elm.cangdu.org/shopping/restaurant/${this.$route.query.id}`)
        .then(res => {
          console.log(res);
          this.restaurantInfo = res.data
        });
      this.$axios
        .get(`https://elm.cangdu.org/shopping/getcategory/${this.$route.query.id}`)
        .then(res => {
          console.log(res);
          this.categoryData = res.data.category_list
        });
    }
  },
  mounted() {
    // this.getData();
  }
};
</script>

<style scoped lang="less">
@import url("~@css/elm/home/restaurant-detail.less");
</style>