<!-- 电视剧 -->
<template>
  <div>
    <div class="movie_body">
      <div class="body_rebo">
        <div class="rebo_nav">
          <div class="left_text">正在热播</div>
          <div class="right_text">12月开播</div>
        </div>
        <div class="rebo_tab">
          <van-row gutter="8">
            <van-col span="8" v-for="(h,index) in 3" :key="index">
              <div class="item_box">
                <div class="item_box_img">
                  <app-Image width="100%" height="100%" lazy-load src="https://p.pstatp.com/origin/138060001c7a7c7749958" />
                </div>
                <div class="item_box_cname">野山百里香</div>
              </div>
              <div class="reying_text">
                <div>12月热映中</div>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 大陆剧 -->
      <div v-for="(j,index1) in list" :key="index1">
        <div class="body_nav_box">
          <i class="line"></i>
          <div class="text">{{j.title}}</div>
          <div class="more">更多
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="body_tab_list">
          <van-row gutter="8">
            <van-col span="8" v-for="(h,index) in 6" :key="index">
              <div class="item_box">
                <div class="item_box_img">
                  <app-Image width="100%" height="100%" lazy-load src="https://p.pstatp.com/origin/ff14000178b0d50d6347" />
                  <div class="score">10.0</div>
                  <div class="title">高清</div>
                </div>
                <div class="item_box_cname">我是一个小虎牙</div>
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

export default {
  setup() {
    const list = reactive(
      [
        { title: '大陆剧' },
        { title: '港剧' },
        { title: '台剧' },
        { title: '韩剧' },
        { title: '日剧' },
        { title: '美剧' },
        { title: '海外剧' },
      ]
    );

    return { list }
  }
}
</script>
<style lang="stylus" scoped>
.movie_body {
  padding: $padding-md;
  background: $mainColor-2;
}

.body_rebo {
  .rebo_nav {
    background: #fff;
    clear_float();

    div {
      display: inline-block;
    }

    .left_text {
      float: left;
      height: 30px;
      background: #1F87CB;
      color: #fff;
      display: inline-grid;
      line-height: 30px;
      padding: 0 10px;
    }

    .right_text {
      float: right;
      height: 30px;
      background: #94c8d7;
      color: #fff;
      display: inline-grid;
      line-height: 30px;
      padding: 0 10px;
    }
  }

  .rebo_tab {
    background: #fff;
    padding: 10px 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);

    .item_box {
      position: relative;

      .item_box_img {
        height: 140px;
      }

      .item_box_cname {
        line-height: 30px;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        text-align: center;
        width: 100%;
      }
    }

    .reying_text {
      position: relative;

      div {
        margin: 4px auto 0;
        border-radius: 2px;
        background: #94c8d7;
        color: #FFF;
        text-align: center;
        font-size: 12px;
        width: 80px;
        position: relative;
        height: 20px;
        text_center();
      }

      &::before {
        content: '';
        background: $mainColor-2;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 0;
      }
    }
  }
}

.body_nav_box {
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

  .text, .line {
    float: left;
  }

  .text {
    color: #525252;
    font-size: 18px;
    margin-left: 6px;
  }

  .line {
    display: inline-block;
    background: $mainColor;
    width: 4px;
    height: 20px;
    border-radius: 2px;
    margin-top: 10px;
  }

  .more {
    float: right;
    color: $mainColor;
  }
}

.body_tab_list {
  border: 1px solid #D9D9D9;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 4px 0;

  .item_box {
    margin-bottom: 10px;

    .item_box_img {
      height: 140px;
      position: relative;

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
      line-height: 30px;
      font-size: 12px;
      width: 100%;
    }
  }
}
</style>