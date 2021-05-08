<!-- 推荐 -->
<template>
  <div class="main">
    <van-swipe :autoplay="3000" height="160">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width:100%; height:100%;" />
      </van-swipe-item>
    </van-swipe>
    <div class="list_icon">
      <div class="dy">
        <div class="dyIcon menuNavIcon"></div>
        <span class="sTitle">电影</span>
      </div>
      <div class="dsj">
        <div class="dsjIcon menuNavIcon"></div>
        <span class="sTitle">电视剧</span>
      </div>
      <div class="dm">
        <div class="dmIcon menuNavIcon"></div>
        <span class="sTitle">动漫</span>
      </div>
      <div class="zy">
        <div class="zyIcon menuNavIcon"></div>
        <span class="sTitle">综艺</span>
      </div>
      <div class="wdy">
        <div class="wdyIcon menuNavIcon"></div>
        <span class="sTitle">微电影</span>
      </div>
    </div>
    <div class="body">
      <!-- 电影 -->
      <div v-for="(h,index) in list" :key="index">
        <div class="modo_title">
          <i class="iconfont icondianying" v-if="index == 0"></i>
          <i class="iconfont icondianshi" v-else-if="index == 1"></i>
          <i class="iconfont icondongman" v-else-if="index == 2"></i>
          <i class="iconfont iconzongyi" v-else-if="index == 3"></i>
          <i class="iconfont iconpaishe" v-else></i>
          <div class="text">{{h.title}}</div>
          <div class="more">更多
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="modo_body">
          <van-row gutter="8">
            <van-col span="8" v-for="(j,index2) in h.list" :key="index2">
              <div class="item_box">
                <div class="item_box_img">
                  <app-Image width="100%" height="100%" lazy-load :src="j.coverImg" />
                </div>
                <div class="item_box_cname">{{j.pname}}</div>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { ref, reactive } from '@vue/composition-api';
import { getRecomList } from '@/http';

export default {
  setup() {
    const images = reactive(
      [
        'https://p.pstatp.com/origin/13776000267f7dc5718fc',
        'https://p.pstatp.com/origin/ff330003553f40f89822',
        'https://p.pstatp.com/origin/138ad0000c76afbd1aa26',
        'https://p.pstatp.com/origin/137cb00015bcee53224c8'
      ]
    )

    /** 获取数据 */
    const list = reactive(ref([]));
    function getList() {
      getRecomList().then(res => {
        list.value = res.data;
      })
    }
    getList()

    return { images, list }
  }
}
</script>
<style lang="stylus" scoped>
.main {
}

.list_icon {
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }

  .menuNavIcon {
    margin: 0 auto;
    width: 45px;
    height: 45px;
    background: url('~@/assets/image/list_icon.png');
    background-size: 248px 248px;
    background-repeat: no-repeat;
  }

  .sTitle {
    display: block;
    text-align: center;
    padding-top: 8px;
  }

  .dy .dyIcon {
    background-position: 0 0;
  }

  .dsj .dsjIcon {
    background-position: -45px 0;
  }

  .dm .dmIcon {
    background-position: -89px 0;
  }

  .zy .zyIcon {
    background-position: -134px 0;
  }

  .wdy .wdyIcon {
    background-position: -178px 0;
  }
}

.body {
  padding: 0.1px $padding-md 10px;
  background: #E9E9E9;

  .modo_title {
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    padding-right: 0.333rem;
    padding-left: 0.333rem;
    border: 1px solid #D9D9D9;
    border-bottom: none;
    background-color: #E9E9E9;
    font-size: 16px;
    clear_float();

    .text, .iconfont {
      float: left;
    }

    .iconfont {
      color: $mainColor;
      font-size: 20px;
      margin-right: 6px;
    }

    .more {
      float: right;
      color: $mainColor;
    }
  }
}

.modo_body {
  border: 1px solid #D9D9D9;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 4px 0;
}

.item_box {
  margin-bottom: 10px;
  position: relative;

  .item_box_img {
    height: 140px;
  }

  .item_box_cname {
    line-height: 30px;
    overflow: hidden;
    height: 30px;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    width: 100%;
  }
}
</style>