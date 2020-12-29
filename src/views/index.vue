<!-- 页面切换容器 -->
<template>
  <div>
    <router-view class="routerView" />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/found" icon="iconfaxian">
        发现
        <template #icon="props">
          <i class="iconfont iconfaxian2" :style="{color:props.active?'#1F87CB':'#646566'}"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/main/index" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus" scoped>
.routerView {
  padding-bottom: 50px;
}

.iconfont {
  font-size: 24px;
}
</style>