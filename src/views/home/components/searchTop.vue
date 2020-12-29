<!--  -->
<template>
  <div class="movie_top">
    <div class="movie_top_left">
      <van-icon name="search" color="#1F87CB" size="18px" />
      <div class="search_text">搜索内容...</div>
    </div>
    <div class="movie_top_right" @click="$router.push('/screen/1')">
      <div>院线</div>
      <div>免费</div>
      <div>全部分类</div>
    </div>
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
.movie_top {
  display: flex;
  align-items: center;
  background: #F7F8FA;
  justify-content: space-between;
  padding: 0 16px;
  height: 28px;

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