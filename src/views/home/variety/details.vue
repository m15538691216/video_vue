<!-- 视频详情 -->
<template>
  <div>
    <van-sticky z-index="999">
      <div class="nav">
        <van-nav-bar :title="data.pname" left-arrow @click-left="bindBack">
          <van-icon name="ellipsis" size="18" slot="right" />
        </van-nav-bar>
      </div>
    </van-sticky>
    <div class="play_box">
      <app-Video v-if="data.path" :src="data.path" :current="current"></app-Video>
    </div>
    <div class="body">
      <div class="introduction">
        <div class="intr_pname">
          {{data.pname}}
        </div>
        <div class="intr_box" @click="showPopup = true;">
          <div class="intr_score">
            40分
          </div>
          ·
          <div class="intr_num">
            18.0亿次播放量
          </div>
          ·
          <div class="intr_text">
            简介
          </div>
          <van-icon name="arrow" size="10px" />
        </div>
      </div>
      <div class="icon_box">
        <i class="iconfont icondianzan"></i>
        <i class="iconfont iconxihuan-tianjia"></i>
        <!-- <i class="iconfont iconxihuan-xuanzhong"></i> -->
        <i class="iconfont iconxiazai"></i>
        <i class="iconfont iconfenxiang1"></i>
      </div>
      <div class="serials_box">
        <div class="serials">
          剧集与播放源
          <van-icon name="arrow" size="16px" />
        </div>
        <div class="serials_list">
          <div class="item" v-for="(h,index) in data.path" :key="index" @click="changeCurrent(index)">{{h.title}}</div>
        </div>
      </div>
      <div class="introduction_box">
        <div class="introduction_pname">简介</div>
        <div class="introduction_text">{{data.introduction}}</div>
      </div>
    </div>
    <van-popup v-model="showPopup" closeable position="bottom">
      <div class="popup_body">
        <div class="pname">{{data.pname}}</div>
        <div class="clarity">
          <span>清晰：</span>
          {{data.clarity}}
        </div>
        <div class="performer">
          <span>主演：</span>
          {{data.performer}}
        </div>
        <div class="type">
          <span>类型：</span>
          {{data.type}}
        </div>
        <div>
          <span>导演：</span>
          {{data.director}}
        </div>
        <div>
          <span>年份：</span>
          {{data.releaseTime}}
        </div>
        <div>
          <span>语言：</span>
          {{data.language}}
        </div>
        <div>
          <span>地区：</span>
          {{data.city}}
        </div>
        <div>
          <span>更新：</span>
          {{data.updateTime}}
        </div>
      </div>
      <div class="introduction_pname">简介</div>
      <div class="introduction_text">{{data.introduction}}</div>
    </van-popup>
  </div>
</template>

<script>
import { ref, reactive, onMounted, inject } from '@vue/composition-api';
import { varietyGetDetails } from '@/http';
import appVideo from '../../../components/Video/index'

export default {
  components: { appVideo },
  setup(props, { refs, root }) {
    const showPopup = ref(false);

    /** 获取电影详情 */
    let id = root.$route.params.id;
    let data = reactive(ref([]));
    const current = ref(0);

    function getDetails() {
      varietyGetDetails({ id: id }).then(res => {
        data.value = res.data;
      })
    }

    onMounted(() => {
      console.log('onMounted');
    })

    function changeCurrent(index) {
      current.value = index;
    }

    /** 返回 */
    function bindBack() {
      root.$router.push('/?id=4')
    }

    /** 执行函数 */
    getDetails();

    return {
      data,
      bindBack,
      changeCurrent,
      current,
      showPopup
    }
  },
}
</script>
<style lang="stylus" scoped>
.play_box {
  .play_box_intr {
    padding: 10px $padding-md;
    clear_float();
  }
}

.body {
  padding: 10px $padding-md;

  .introduction {
    .intr_pname {
      font-size: 18px;
    }

    .intr_box {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #888;

      div {
        margin: 0 4px;
      }

      .intr_score {
        margin-left: 0;
      }
    }
  }

  .icon_box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0;

    .iconfont {
      font-size: 18px;
      margin: 0 10px;
    }

    .icondianzan {
      flex: 1;
      margin-left: 0;
    }

    .iconfenxiang {
      margin-right: 0;
    }

    .iconxihuan-xuanzhong {
      color: #d81e06;
    }
  }

  .serials_box {
    padding: 10px 0;

    .serials {
      display: flex;
      align-items: center;
      font-size: 16px;
      justify-content: space-between;
    }

    .serials_list {
      margin: 10px 0 0;
      clear_float();
      display: flex;
      white-space: nowrap;
      overflow: scroll;
      padding-bottom: 10px;

      .item {
        padding: 6px 8px;
        background: #eeeeee;
        border-radius: 2px;
        margin-right: 10px;
      }
    }
  }

  .introduction_box {
    padding: 10px 0;

    .introduction_pname {
      font-size: 16px;
    }

    .introduction_text {
      line-height: 1.6;
      text-indent: 2em;
    }
  }
}

.van-popup {
  padding: 10px 15px;
  color: #000;
  height: calc(100vh - 292px);

  .popup_body {
    div {
      line-height: 20px;
    }

    div span {
      color: #1F87CB;
    }

    .pname {
      font-size: 16px;
      padding: 4px 0;
    }

    .clarity {
      font-size: 12px;
    }

    .performer {
      word-break: break-all;
      height: 18px;
      overflow: hidden;
    }
  }

  .introduction_pname {
    margin-top: 10px;
    line-height: 30px;
    font-size: 16px;
  }

  .introduction_text {
    line-height: 1.6;
    text-indent: 2em;
  }
}
</style>