<!-- 个人中心 -->
<template>
  <div>
    <div class="user_main">
      <div class="header">
        <div class="img">
          <van-image round :src="data.avator" />
        </div>
        <div v-if="data.id" class="right_box">
          <div class="name">O球球O</div>
          <div class="list_text">
            <div class="ln1">关注 0</div>
            <div class="ln2">粉丝 0</div>
            <div class="ln3">点赞 0</div>
          </div>
        </div>
        <div v-else class="unRight_box" @click="bindRouter('/login')">
          请先登录
        </div>
      </div>
      <div class="body">
        <div class="list">
          <div class="item">
            <div class="icon_left">
              <i class="iconfont iconlishijilu"></i>
            </div>
            <div class="text">
              <div>观看历史</div>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="item">
            <div class="icon_left">
              <i class="iconfont iconshoucang"></i>
            </div>
            <div class="text">
              <div>收藏与预约</div>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="item">
            <div class="icon_left">
              <i class="iconfont iconxiazai"></i>
            </div>
            <div class="text">
              <div>下载</div>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
        <div class="list">
          <div class="item" @click="bindRouter('/set')">
            <div class="icon_left">
              <i class="iconfont iconshezhi"></i>
            </div>
            <div class="text">
              <div>设置</div>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="item">
            <div class="icon_left">
              <i class="iconfont iconfankui"></i>
            </div>
            <div class="text">
              <div>帮助与反馈</div>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="item">
            <div class="icon_left">
              <i class="iconfont iconbangzhu"></i>
            </div>
            <div class="text">
              <div>关于我们</div>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div v-show="data.id" class="outLogin">
        <div @click="outLogin">注销登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, inject, onMounted, computed } from '@vue/composition-api';
import { userInfo, getrefreshToken } from '@/http';
import { removeAccessToken, removeRefreshToken, getRefreshToken } from '@/utils/auth.js';
import { mapState } from "vuex"

export default {
  setup(props, { refs, root }) {
    const data = reactive(ref({}));
    data.value.avator = 'https://img.yzcdn.cn/vant/cat.jpeg';

    function getUsers() {
      userInfo().then(res => {
        data.value = res.data;
        console.log(res);
      }).catch(err => {
        console.log(err.response);
      })
    }

    function bindRouter(item) {
      root.$router.push(item)
    }




    let reload = inject('reload');

    function outLogin() {
      removeAccessToken();
      removeRefreshToken();
      reload();
    }

    if (getRefreshToken()) {
      getUsers();
    }



    return {
      data,
      bindRouter,
      outLogin,
    }
  },
  watch: {
    userInfo(data) {
      console.log(data);
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.USERINFO
    }),
  },
}
</script>
<style lang="stylus" scoped>
.user_main {
  padding: 0.1px;
  background: $mainColor-2;
  height: calc(100vh - 50px);
}

.switch {
  background: #fff;
  width: 100%;
  text-align: right;
  padding: 6px 6px 0 0;

  .van-switch {
    font-size: 12px;
    box-sizing: content-box;
  }
}

.header {
  display: flex;
  align-items: center;
  padding: 10px $padding-md 20px;
  background: #fff;

  .img {
    .van-image {
      width: 60px;
      height: 60px;
    }
  }

  .right_box {
    margin-left: 10px;

    .name {
      font-size: 16px;
      line-height: 28px;
      font-weight: bold;
    }

    .list_text {
      display: flex;
      align-items: center;
      color: #666;

      div:not(:nth-child(1)) {
        margin-left: 10px;
        display: flex;
        align-items: center;
        padding: 0.1px;

        &:before {
          content: '';
          width: 1px;
          height: 10px;
          background: #999;
          margin-right: 10px;
        }
      }
    }
  }

  .unRight_box {
    margin-left: 10px;
    font-size: 16px;
  }
}

.body {
  .list {
    background: #fff;
    padding: 0 $padding-md;

    .item {
      height: 40px;
      clear_float();

      .icon_left {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        float: left;
        margin: 5px 0;
        margin-right: 10px;
        text_center();

        .iconfont {
          font-size: 30px;
        }

        .iconxiazai {
          font-size: 20px;
        }

        .iconshezhi {
          font-size: 32px;
        }

        .iconbangzhu {
          font-size: 26px;
        }
      }

      .text {
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.02667rem solid #eee;

        div {
          font-size: 14px;
        }

        .van-icon {
          color: #999;
        }
      }
    }
  }

  .list:nth-child(2) {
    margin-top: 10px;
  }
}

.outLogin {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  div {
    background: #829225;
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    height: 28px;
    width: 100px;
    text-align: center;
    line-height: 28px;
  }
}
</style>