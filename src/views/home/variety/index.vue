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
          <div class="right_box" @click="$router.push(`/screen?text=综艺`)">
            筛选
          </div>
        </div>
        <div class="mode_body">
          <van-row gutter="8">
            <van-col span="8" v-for="(h,index) in list" :key="index">
              <div class="item_box" @click="$router.push(`/variety/details/${h.id}`)">
                <div class="item_box_img">
                  <app-Image width="100%" height="100%" lazy-load :src="h.coverImg" />
                  <div class="top_img"></div>
                  <div class="title">{{h.clarity}}</div>
                  <!-- <div class="score">10.0</div> -->
                </div>
                <div class="item_box_cname">{{h.pname}}</div>
                <div class="item_box_address">地区:{{h.city}}</div>
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
import { varietyGetList } from '@/http'

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
    const list = reactive(ref([]));
    const total = ref(0);

    function getList() {
      varietyGetList({ sort: 'updateTime', count: count.value }).then(res => {
        if (res.code == 200) {
          list.value = res.data.list;
          total.value = res.data.total;
          refreshing.value = false;
          loading.value = false;
        }
      })
    }

    getList();

    /** 下拉刷新 */
    const refreshing = ref(false);

    function onRefresh() {
      setTimeout(() => {
        root.$toast('刷新成功');
        count.value = 21;
        getList();
      }, 1000);
    }

    /** 加载更多 */
    const loading = ref(false);
    const finished = ref(false);

    function onLoad() {
      setTimeout(() => {
        count.value += 3;
        getList();
        if (count.value >= total.value) {
          finished.value = true;
        }
      }, 1500);
    }


    return {
      list,
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
  clear_float();

  .item {
    width: 70px;
    text-align: center;
    background: #94c8d7;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
    float: left;

    &--active {
      background: #1F87CB;

      .iconfont {
        color: #fff;
      }
    }
  }

  .right_box {
    float: right;
    height: 30px;
    line-height: 30px;
    width: 70px;
    text-align: center;
    background: #94c8d7;
    color: #fff;
    font-size: 14px;
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
      height: 24px;
      overflow: hidden;
      font-size: 14px;
      width: 100%;
    }

    .item_box_address {
      color: #999;
    }
  }
}
</style>