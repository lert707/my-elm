<template>
  <div class="container">
    <p>hello my-elm</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      result: []
    }
  },
  methods: {
    getData() {
      // 同步
      // this.$store.commit('sync')
      // 异步
      this.$store.dispatch('async')
      setTimeout(() => {
        const totalData = this.$store.getters.getData
        console.log(totalData, 1111)
      }, 200)
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="less">
</style>
