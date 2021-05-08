<template>
  <div>
    <div id="xg-player">
      <!-- <div class="xg-player-header" unselectable="on" onselectstart="return false">
        <div class="xg-player-header-back">{{back}}</div>
        <div class="xg-player-header-more">更多</div>
      </div> -->
    </div>
  </div>
</template>


<script>
import Player from 'xgplayer';
import '../../.xgplayer/skin/index'
import back from '../../.xgplayer/skin/assets/back.svg'
import { ref, reactive, onMounted, inject, toRefs, watch } from '@vue/composition-api';



export default {
  setup() {
    const back = ref(back)
    onMounted(() => {
      new Player({
        id: 'xg-player',
        url: 'https://v-cdn.zjol.com.cn/280443.mp4',
        preloadTime: 15, // 默认预加载 15 秒
        customize:{
          headerText:'测试'
        },
        ignores:['volume'],
        enableVideoDbltouch: true,
      })
    })

    return {
      back
    }
  }
}

</script>

<style lang="stylus">
#xg-player {
  width: 100% !important;

  
}
</style>>
