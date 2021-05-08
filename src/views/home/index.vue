<!-- 首页 -->
<template>
  <div class="home">
    <van-tabs v-model="active" @click="onClick" sticky animated line-height="0" border title-active-color="red">
      <van-tab title="精选" name="0">
        <my-Recom class="child" />
      </van-tab>
      <van-tab title="电影" name="1">
        <my-Movie class="child" />
      </van-tab>
      <van-tab title="电视剧" name="2">
        <my-Teleplay class="child" />
      </van-tab>
      <van-tab title="动漫" name="3">
        <my-Anime class="child" />
      </van-tab>
      <van-tab title="综艺" name="4">
        <my-Variety class="child" />
      </van-tab>
    </van-tabs>
    <div class="fiexd_search" @click="bindSearch">
      <van-icon name="search" />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

import searchTop from './components/searchTop';

import { getProduct } from '@/http';
import myRecom from './recom/index';
import myMovie from './movie/index';
import myTeleplay from './teleplay/index';
import myAnime from './anime/index';
import myVariety from './variety/index';

export default {
  components: { searchTop, myRecom, myMovie, myTeleplay, myAnime, myVariety },
  setup(props, { refs, root }) {
    const active = ref(0);
    const arr = ['精选', '电影', '电视剧', '动漫', '综艺']

    active.value = root.$route.query.id;
    console.log(root.$route.query.id);
    function onClick(e) {
      active.value = e;
      root.$router.push('/?id=' + e);
    }

    function bindSearch() {
      root.$router.push(`/search/${arr[active.value]}`);
    }


    return { active, onClick, bindSearch }
  }
}
</script>
<style lang="stylus" scoped>
.van-tabs >>> .van-sticky {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background: #fff;

  .van-tabs__wrap {
    width: 90%;
  }
}

.van-tabs >>> .van-tabs__content--animated {
  margin-top: 44px;
}

.child {
  height: calc(100vh - 94px);
  overflow: scroll;
}

.fiexd_search {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  height: 42px;
  align-items: center;
  width: 10%;
  justify-content: center;
  padding-right: 10px;

  .van-icon {
    font-size: 20px;
    color: red;
  }
}
</style>