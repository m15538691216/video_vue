<!-- 设置 -->
<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="$router.go(-1)">
    </van-nav-bar>
    <div class="set_body">
      <van-cell-group>
        <van-cell title="深色模式" :value="theme" is-link @click="show = true" />
      </van-cell-group>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '14%' }">
      <van-cell-group>
        <van-cell title="普通模式" @click="onChange(false)">
          <template #right-icon v-if="theme == '已关闭'">
            <van-icon name="success" class="search-icon" />
          </template>
        </van-cell>
        <van-cell title="深色模式" @click="onChange(true)">
          <template #right-icon v-if="theme == '已开启'">
            <van-icon name="success" class="search-icon" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-popup>

  </div>
</template>

<script>
import { ref, reactive, onMounted } from '@vue/composition-api';
import { setLocalStorage, getLocalStorage } from '@/utils/auth.js'


export default {
  setup(props, { refs, root }) {
    const show = ref(false);
    const theme = ref('已关闭');
    if (getLocalStorage('theme')) {
      theme.value = getLocalStorage('theme') == 'bright' ? '已关闭' : '已开启';
    } else {
      theme.value = '已关闭';
    }

    function onChange(evnet) {
      if (!evnet) {
        //普通
        window.document.documentElement.setAttribute('data-theme', 'bright');
        setLocalStorage('theme', 'bright')
        theme.value = '已关闭';
      } else {
        //深色
        window.document.documentElement.setAttribute('data-theme', 'dark');
        setLocalStorage('theme', 'dark');
        theme.value = '已开启'
      }
      show.value = false;

    }

    return {
      show,
      theme,
      onChange
    }
  },
}
</script>
<style lang="stylus" scoped>
.set_body {
  bg_color(mainColor);
  height: calc(100vh - 40px);

  .van-cell-group {
    &::after {
      border_color(borderColor);
    }

    .van-cell {
      bg_color(mainColor-2);
      font_color(fontColor-2);
    }
  }
}
</style>