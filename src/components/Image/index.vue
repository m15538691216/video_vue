<!--  -->
<template>
  <van-image :width="width" :height="height" :lazy-load="lazyLoad" :src="src" :flt="flt" :radius="radius">
    <template v-slot:loading>
      <van-loading type="spinner" size="20" />
    </template>
  </van-image>
</template>

<script>
import { toRefs } from '@vue/composition-api'

export default {
  name: 'app-Image',
  props: {
    width: {
      value: null,
      type: String || Number
    },
    height: {
      value: null,
      type: String || Number
    },
    radius: {
      value: 0,
      type: String || Number
    },
    src: {
      value: null,
      type: String
    },
    flt: {
      value: 'fill',
      type: String
    },
    lazyLoad: {
      value: false,
      type: Boolean
    }
  },
  //   setup(props) {
  //     let { width, height } = toRefs(props)
  //     console.log(props)
  //   }
}
</script>
<style lang="stylus" scoped></style>