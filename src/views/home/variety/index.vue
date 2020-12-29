<!-- 综艺 -->
<template>
  <div class="anime">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="mode_title">
          <div class="item" v-for="(h,index) in items" :key="index" :class="{'item--active':h.checked}" @click="bandItem(h.id)">
            <i class="iconfont" :class="h.icon"></i>
            {{h.text}}
          </div>
        </div>
        <div class="mode_body">
          <van-row gutter="8">
            <van-col span="8" v-for="(h,index) in count" :key="index">
              <div class="item_box">
                <div class="item_box_img">
                  <app-Image width="100%" height="100%" lazy-load src="https://p.pstatp.com/origin/fed4000110241e6b3748" />
                  <!-- <div class="top_img"></div> -->
                  <div class="title">20201205期</div>
                  <div class="score">10.0</div>
                </div>
                <div class="item_box_cname">我是一个小虎牙</div>
                <div class="item_box_address">地区:日本</div>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  setup(props, { refs, root }) {
    /**切换按钮模块 */
    const items = reactive(
      [
        { id: 0, text: '最新', icon: 'iconzuixin', checked: true },
        { id: 1, text: '人气', icon: 'iconrenqi', checked: false },
        { id: 2, text: '评分', icon: 'iconpingfen', checked: false },
      ]
    );

    function bandItem(id) {
      items.forEach(ele => {
        if (ele.id == id) {
          ele.checked = true;
        } else {
          ele.checked = false;
        }
      });
    }

    /** 获取数据模块 */
    const count = ref(21);

    /** 下拉刷新 */
    const refreshing = ref(false);

    function onRefresh() {
      setTimeout(() => {
        root.$toast('刷新成功');
        count.value = 21;
        refreshing.value = false;
        finished.value = false;
      }, 1000);
    }

    /** 加载更多 */
    const loading = ref(false);
    const finished = ref(false);

    function onLoad() {

      setTimeout(() => {
        count.value += 3;
        console.log(count.value)
        loading.value = false;
        if (count.value >= 60) {
          finished.value = true;
        }
      }, 1000);
    }


    return {
      items,
      bandItem,
      count,
      refreshing,
      onRefresh,
      loading,
      finished,
      onLoad
    }
  },
}
</script>
<style lang="stylus" scoped>
.anime {
  background: $mainColor-2;
  padding: $padding-md;
}

.mode_title {
  background: #fff;
  display: flex;

  .item {
    width: 70px;
    text-align: center;
    background: #94c8d7;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;

    &--active {
      background: #1F87CB;

      .iconfont {
        color: #fff;
      }
    }
  }

  .iconfont {
    color: $mainColor;
    font-size: 14px;
  }
}

.mode_body {
  background: #fff;
  padding: 10px 4px 0;

  .item_box {
    margin-bottom: 10px;

    .item_box_img {
      height: 140px;
      position: relative;

      .top_img {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        background: url('~@/assets/image/lianzai.png') no-repeat;
        background-size: 100%;
      }

      .score {
        position: absolute;
        left: 0;
        bottom: 0;
        background: $mainColor;
        color: #fff;
        padding: 2px 4px;
        font-weight: 700;
      }

      .title {
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        padding: 2px 4px;
      }
    }

    .item_box_cname {
      line-height: 24px;
      font-size: 14px;
      width: 100%;
    }

    .item_box_address {
      color: #999;
    }
  }
}
</style>