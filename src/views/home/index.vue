<!-- 首页 -->
<template>
  <div>
    <van-tabs v-model="active" sticky type="card" color="#1F87CB" title-inactive-color="#fff" background="#222">
      <van-tab title="精选">
        <recom />
      </van-tab>
      <van-tab title="电影">
        <van-sticky :offset-top="30">
          <searchTop />
        </van-sticky>
        <movie />
      </van-tab>
      <van-tab title="电视剧">
        <van-sticky :offset-top="30">
          <searchTop />
        </van-sticky>
        <teleplay />
      </van-tab>
      <van-tab title="动漫">
        <van-sticky :offset-top="30">
          <searchTop />
        </van-sticky>
        <anime />
      </van-tab>
      <van-tab title="综艺">
        <van-sticky :offset-top="30">
          <searchTop />
        </van-sticky>
        <variety />
      </van-tab>
      <van-tab title="微电影">
        <van-sticky :offset-top="30">
          <searchTop />
        </van-sticky>
        <microfilm />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

import searchTop from './components/searchTop'
import recom from './recom/index'
import movie from './movie/index'
import teleplay from './teleplay/index'
import anime from './anime/index'
import variety from './variety/index'
import microfilm from './microfilm/index'

import { getProduct } from '@/http';

export default {
  components: { searchTop, recom, movie, teleplay, anime, variety, microfilm },
  setup() {
    const active = ref(0);

    return { active }
  }
}
</script>
<style lang="stylus" scoped>
.van-tabs--card >>> .van-sticky .van-tabs__wrap .van-tabs__nav--card {
  margin: 0;
  border: 0;
  border-radius: 0;

  .van-tab {
    border: 0;
  }
}
</style>