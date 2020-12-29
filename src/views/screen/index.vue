<!-- 筛选 -->
<template>
  <div>
    <van-nav-bar title="电影" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="body">
      <div class="body_nav">
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.sort" :key="index">{{h.text}}</div>
        </div>
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.type" :key="index">{{h.text}}</div>
        </div>
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.regions" :key="index">{{h.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/composition-api';
import { getLabel } from '@/http';

export default {
  setup(props, { refs, root }) {
    const pid = root.$route.params.id;
    const data = reactive(ref({}));

    /** 获取 排序 类型 地区 */
    function getLabels() {
      getLabel({ id: pid }).then(res => {
        data.value = res.data;
        data.value.sort = JSON.parse(res.data.sort);
        data.value.type = JSON.parse(res.data.type);
        data.value.regions = JSON.parse(res.data.regions);
      })
    }

    getLabels();
    return {
      data
    }
  },
}
</script>
<style lang="stylus" scoped>
.body {
  padding: 0 $padding-md;
}

.body_nav {
  padding: 10px 0;

  .mode_items {
    margin-bottom: 10px;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;

    .item {
      padding: 2px 6px;
      border-radius: 2px;

      &--active {
        background: #eeeeee;
        color: $mainColor;
      }
    }
  }
}
</style>