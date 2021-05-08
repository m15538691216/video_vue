<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
    
  </div>
</template>


<script>
import { ref, reactive, provide } from '@vue/composition-api';

export default {
  setup(props, { refs, root }) {
    let isRouterAlive = ref(true);

    const reload = () => {
      isRouterAlive.value = false;
      return new Promise((resolve, reject) => {
        root.$nextTick(() => {
          isRouterAlive.value = true;
          resolve(true);
        })
      })
    }
    provide('reload', reload)

    return { isRouterAlive }
  }
}
</script>

<style lang="stylus" >
@import '~~@/assets/styles/app.styl';

</style>
