<!-- 发现 -->
<template>
  <div class="found">
    <van-nav-bar left-text="动态" fixed>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="body">
      <div class="found_box" v-for="(h,index) in data" :key="index">
        <div class="box_header">
          <div class="header_left">
            <van-image round :src="h.avator" />
            <div class="name">{{h.name}}</div>
          </div>
          <div class="header_right">
            <div class="guanzu">
              <van-icon name="plus" />
              <span>关注</span>
            </div>
            <van-icon name="ellipsis" />
          </div>
        </div>
        <div class="box_body">
          <div class="body_text" v-html="h.text">
          </div>
          <div class="img_list">
            <div class="img" v-for="(j,index) in h.image" :key="index">
              <app-Image width="100%" height="100%" lazy-load :src="j.url" />
            </div>
          </div>
        </div>
        <div class="box_footer">
          <div class="like">
            <van-icon name="like-o" />
            <span>{{h.praise}}</span>
          </div>
          <div class="message">
            <van-icon name="comment-o" />
            <span>{{h.news}}</span>
          </div>
          <div class="share">
            <van-icon name="share-o" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="fixd_box" @click="$router.push('/editor')">
      <van-icon name="add" />
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from '@vue/composition-api';
import { foundGetData } from '@/http';

export default {
  setup() {

    const data = reactive(ref([]))


    function getData() {
      foundGetData().then(res => {
        console.log(res);
        if (res.code === 200) {
          data.value = res.data;
        }
      })
    }

    /** 执行模块 */
    getData();

    return {
      data
    }
  },
}
</script>
<style lang="stylus" scoped>
.found {
  bg_color(mainColor);
  min-height: calc(100vh - 50px);
}

.body {
  margin-top: 46px;
}

.found_box {
  bg_color(mainColor-2);
  padding: 10px;
  margin-bottom: 10px;

  .box_header {
    clear_float();

    .header_left {
      float: left;
      display: flex;
      align-items: center;

      .van-image {
        width: 40px;
        height: 40px;
      }

      .name {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .header_right {
      float: right;
      display: flex;

      .guanzu {
        display: flex;
        align-items: center;
        height: 40px;
        color: #829225;

        .van-icon-plus {
          font-size: 12px;
          font-weight: bold;
        }
      }

      .van-icon-ellipsis {
        font-size: 16px;
        display: table;
        transform: rotate(90deg);
        margin-top: 12px;
        color: #829225;
      }
    }
  }

  .box_body {
    margin-top: 6px;

    .body_text {
      font-size: 14px;
      word-break: break-all;

      .title {
        color: #829225;
      }
    }

    .img_list {
      margin-top: 4px;
      display: flex;

      .img {
        width: 33.3%;
      }

      .img:not(:nth-child(1)) {
        margin-left: 4px;
      }
    }
  }

  .box_footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    div {
      display: flex;
      align-items: center;
      margin-left: 20px;

      span {
        margin-left: 2px;
      }
    }

    .van-icon {
      font-size: 16px;
    }

    .like {
    }
  }
}

.fixd_box {
  position: fixed;
  bottom: 70px;
  right: 10px;

  .van-icon {
    font-size: 40px;
    color: #829225;
    background: #fff;
    border-radius: 50%;
  }
}
</style>