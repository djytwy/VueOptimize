<template>
  <div class="about">
    <h1 class="test">1231</h1>
    <el-button type="primary">基础按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <svg-icon iconClass="example" iconName="example" />
  </div>
</template>

<script>
import '@/style/_variables.scss'
export default {
  mounted() {
    console.log('测试一下优化console.log')
  }
}
</script>

<style lang="scss" scoped>
.about {
  .test22 {
    color: blue;
  }
}
</style>
