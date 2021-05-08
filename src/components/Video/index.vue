<template>
  <div>
    <div id="dplayer">
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, inject, toRefs, watch } from '@vue/composition-api';
let Hls = require('hls.js');
import DPlayer from 'dplayer';

import { getDanmaku } from '@/http';

export default {
  props: {
    src: {
      value: null,
      type: Array
    },
    current: {
      value: 0,
      type: Number
    },
  },
  setup(props, { refs, root }) {
    let { src, pid, current } = toRefs(props);
    var dp = ref(null);

    const count = current.value;

    /** 生命周期模块 */
    onMounted(() => {
      dp.value = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
          url: src.value[count].path,
          type: 'customHls',
          customType: {
            customHls: function (video, player) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
    })

    function qiehuan(index) {
      console.log(dp);
      dp.value.switchVideo(
        {
          url: src.value[index].path,
          type: 'customHls',
          customType: {
            customHls: function (video, player) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        }
      );
    }

    watch(current, (newValue, oldValue) => { //直接监听
      console.log('切换下一集：' + oldValue + ' ---> ' + newValue);
      qiehuan(newValue);
    });

    return { qiehuan }

  }
}
</script>

<style lang="stylus" scoped>
#dplayer {
  height: 250px;

  & >>> .dplayer-controller .dplayer-icons-left .dplayer-play-icon {
    display: inline-block;
  }

  & >>> .dplayer-header {
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
  }
}
</style>