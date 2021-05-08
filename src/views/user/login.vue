<!-- 登录 -->
<template>
  <div class="main">
    <div class="text_welcome">Welcome</div>
    <div class="input_box">
      <div>
        <van-field v-model="userPhone" type="text" placeholder="账号" />
      </div>
      <div>
        <van-field v-model="passWord" type="password" placeholder="密码" />
      </div>
    </div>
    <div class="button" @click="btnLogin">立即登录</div>
    <div class="bttton_title">
      <div class="text">忘记密码?</div>
      <div class="line"></div>
      <div class="text">立即注册</div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api'
import { login } from '@/http/index'
import { setAccessToken, setRefreshToken } from '@/utils/auth'

export default {
  setup(props, { refs, root }) {
    const count = ref(0);
    const userPhone = ref('');
    const passWord = ref('');

    const btnLogin = () => {
      login(userPhone.value, passWord.value).then(res => {
        if (res.code == 200) {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          root.$router.replace('/main/index')
        }
      })
    }

    return {
      count,
      userPhone,
      passWord,
      btnLogin,
    }
  }
}
</script>
<style lang="stylus" scoped>
.main {
  height: 100vh;
  background: -webkit-linear-gradient(left top, #6DCAB7, #3B79CE);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.text_welcome {
  font-size: 45px;
  color: #EAEAEA;
  text-shadow: 0px 3px 1px rgba(120, 120, 120, 0.6);
}

.input_box {
  margin-top: 60px;

  .van-cell {
    width: 270px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    border: 1px solid #E5E5E5;
    background: transparent;
  }

  div:nth-child(2) {
    margin-top: 24px;
  }
}

.button {
  margin-top: 50px;
  width: 270px;
  height: 40px;
  background: linear-gradient(0deg, #3080E3 0%, #3591E7 100%);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #EAEAEA;
}

.bttton_title {
  display: flex;
  align-items: center;
  margin-top: 10px;

  .text {
    color: #e5e5e5;
    font-size: 12px;
  }

  .line {
    background: #fff;
    margin: 0 10px;
    width: 1px;
    height: 12px;
  }
}
</style>