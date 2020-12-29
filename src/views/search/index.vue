<!-- 搜索 -->
<template>
  <div>
    <div class="nav">
      <van-icon name="arrow-left" size="18px" />
      <van-search v-model="searchText" left-icon="none" right-icon="search" shape="round" show-action placeholder="请输入搜索关键词">
        <template #right-icon>
          <i class="iconfont iconyuyin"></i>
        </template>
      </van-search>
    </div>
    <div class="body">
      <div class="tuijian_box">
        <div class="tj_text">推荐</div>
        <div class="tj_list">
          <div class="tj_item">极限挑战</div>
          <div class="tj_item">绝命毒师</div>
          <div class="tj_item">全职高手</div>
          <div class="tj_item">红色</div>
          <div class="tj_item">瞄准</div>
          <div class="tj_item">巡回检查组</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  setup() {
    const searchText = ref(null);

    return {
      searchText
    }
  },
}
</script>
<style lang="stylus" scoped>
.nav {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebedf0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding 0 10px;

  .van-icon {
    height: 34px;
    width: 34px;
    font-size: 18px;
    line-height: 34px;
    text-align: center;
  }

  .van-search {
    width: calc(100% - 50px);
  }

  .iconyuyin {
    font-size: 18px;
    color: #d81e06;
  }
}

.body {
  padding: $padding-md;

  .tuijian_box {
    .tj_text {
      color: #888888;
    }

    .tj_list {
      margin-top: 10px;
      clear_float();

      .tj_item {
        float: left;
        background: #eee;
        padding: 2px 6px;
        border-radius: 2px;
        margin-right: 8px;
        margin-bottom 10px;
      }
    }
  }
}
</style>