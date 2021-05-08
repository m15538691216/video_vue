<!-- 搜索 -->
<template>
  <div>
    <div class="nav">
      <van-icon name="arrow-left" size="18px" @click="bindBack" />
      <van-search v-model="searchText" adjust-position="false" @search="bindSearch" @cancel="bindBack" left-icon="none" right-icon="search" focus shape="round" show-action placeholder="请输入搜索关键词">
        <template #right-icon>
          <i class="iconfont iconyuyin"></i>
        </template>
      </van-search>
    </div>

    <div class="body">
      <div class="tuijian_box" v-if="!data">
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
      <div class="content_box" v-else>
        <div class="list">
          <div class="item" v-for="(h,index) in data" :key="index" @click="bindDetails(h.id,h.sort)">
            <div class="cover_image">
              <app-Image width="100%" height="100%" lazy-load :src="h.coverImg" />
            </div>
            <div class="right_box">
              <div class="pname">{{h.pname}}</div>
              <div class="performer">演员：
                <span>{{h.performer}}</span>
              </div>
              <div class="type">类型：
                <span>{{h.type}}</span>
              </div>
              <div>语言：
                <span>{{h.language}}</span>
              </div>
              <div>状态：
                <span>{{h.clarity}}</span>
              </div>
              <div>地区：
                <span>{{h.city}}</span>
              </div>
              <div>时间：
                <span>{{h.updateTime | formatDate}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
import { getSearch } from '@/http'

export default {
  setup(props, { refs, root }) {
    const searchText = ref(null);
    let title = root.$route.params.id;


    //返回
    function bindBack() {
      root.$router.go(-1);
    }

    //搜索
    let data = reactive(ref(''));

    function bindSearch(event) {
      if (event) {
        getSearch({ title: title, text: event }).then(res => {
          if (res.code == 200) {
            data.value = res.data;
          }
        })
      }
    }


    //跳转详情
    function bindDetails(id,sort){
      console.log(sort);
      if(sort == 'video'){
        root.$router.push(`/movie/details/${id}`)
      }else{
        root.$router.push(`/${sort}/details/${id}`)
      }
      
    }

    return {
      searchText,
      bindBack,
      bindSearch,
      data,
      bindDetails
    }
  },
}
</script>
<style lang="stylus" scoped>
.nav {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebedf0;
  padding: 0 10px;
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;

  .van-icon {
    height: 36px;
    width: 34px;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    background: #fff;
  }

  .van-search {
    height: 36px;
    width: calc(100% - 50px);
  }

  .iconyuyin {
    font-size: 18px;
    color: #d81e06;
  }
}

.body {
  margin-top: 34px;
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
        margin-bottom: 10px;
      }
    }
  }

  .content_box {
    .list {
      .item {
        width: 100%;
        display: flex;
        padding: 5px 0;

        .cover_image {
          height: 140px;
          width: 110px;
        }

        .right_box {
          margin-left: 10px;
          font-size: 13px;

          div {
            line-height: 20px;
          }

          .pname {
            font-size: 16px;
            color: #1F87CB;
            line-height: 24px;
          }

          .performer {
            width: 200px;
            height: 20px;
            overflow: hidden;
          }

          .type {
            width: 200px;
            height: 20px;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>