<template>
  <div class="my">
    <div class="header">
      <div class="back" @click="toBack">back</div>
      <div class="title">我的</div>
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
export default {
  data() {
    return {};
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang='less'>
@import url("~@css/elm/my/my.less");
</style>