<!-- 页面顶部 -->
<template>
  <div class="movie_top">
    <div class="movie_top_left" @click="bindSearch">
      <van-icon name="search" color="#1F87CB" size="18px" />
      <div class="search_text">搜索内容...</div>
    </div>
    <div class="movie_top_right" @click="bindScreen">
      <div>院线</div>
      <div>免费</div>
      <div>全部分类</div>
    </div>
  </div>
</template>
<script>
import { ref, toRefs, watch } from '@vue/composition-api';

export default {
  setup(props, { refs, root }) {
    let title = '';


    title = root.$route.meta.title;
    watch(() => root.$route, (to,from) => {
      title = to.meta.title;
    })

    function bindSearch() {
      root.$router.push(`/search/${title}`)
    }

    function bindScreen(){
      root.$router.push(`/screen/${title}`)
    }

    return {
      bindSearch,
      bindScreen
    }
  },
}
</script>
<style lang="stylus" scoped>
.movie_top {
  display: flex;
  align-items: center;
  background: #F7F8FA;
  justify-content: space-between;
  padding: 0 16px;
  height: 30px;

  .movie_top_left {
    display: flex;
    align-items: center;
    width: 50%;

    .search_text {
      margin-left: 4px;
      color: #666;
    }
  }

  .movie_top_right {
    display: flex;
    align-items: center;
    background: #ddd;
    border-radius: 11px;
    height: 22px;
    padding: 0 10px;

    div {
      margin: 0 6px;
      color: #666666;
    }
  }
}
</style>