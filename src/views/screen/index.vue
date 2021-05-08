<!-- 筛选 -->
<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="$router.go(-1)" @click-right="$router.push(`/search/${title}`)">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="body">
      <div class="body_nav">
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.type" :key="index" @click="bindType(index)">{{h.text}}</div>
        </div>
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.year" :key="index" @click="bindYear(index)">{{h.text}}</div>
        </div>
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.city" :key="index" @click="bindCity(index)">{{h.text}}</div>
        </div>
        <div class="mode_items">
          <div class="item" :class="{'item--active':h.checked}" v-for="(h,index) in data.sort" :key="index" @click="bindSort(index)">{{h.text}}</div>
        </div>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :immediate-check="false" @load="onLoad">
        <div class="body_content">
          <div class="box" v-for="(h,index) in list" :key="index" @click="bindDetails(h.id)">
            <div class="img">
              <app-Image width="100%" height="100%" :src="h.coverImg" />
              <div class="clarity">{{h.clarity}}</div>
              <div class="score">{{ h.score | floatNumber }}</div>
            </div>
            <div class="pname">
              {{h.pname}}
            </div>
            <div class="performer">
              主演：{{h.performer}}
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/composition-api';
import { getScreen, getScreenList } from '@/http';
import screen from '@/common/file/screen'

export default {
  setup(props, { refs, root }) {
    const title = root.$route.query.text;
    const { text } = root.$route.query;
    const data = reactive(ref({}));
    const list = reactive(ref([]));
    let query = { type: '', city: '', year: '', sort: '', count: 30, title: text };
    let total = 0;

    for (let i = 0; i < screen.length; i++) {
      if (screen[i].title == text) {
        data.value = screen[i].obj;
      }
    }

    /** 获取 排序 类型 地区 */
    function getScreens() {
      getScreen({ title: title }).then(res => {
        data.value = res.data;
        query.tableName = res.data.tableName;
        if (text) {
          data.value.type.forEach((ele, index1) => {
            if (ele.text != text) {
              ele.checked = false;
            } else {
              ele.checked = true;
            }
          });
          query.type = text;
        }

        getScreenLists();
      })
    }

    /** 获取数据 */
    function getScreenLists() {
      getScreenList(query).then(res => {
        list.value = res.data.list;
        total = res.data.total;
        if (query.count >= total) {
          finished.value = true;
        }
      })
    }

    function bindSort(index) {
      data.value.sort[index].checked = true;
      query.sort = data.value.sort[index].text;
      data.value.sort.forEach((ele, index1) => {
        if (index1 != index) {
          ele.checked = false;
        }
      });
      getScreenLists();
    }

    function bindType(index) {
      data.value.type[index].checked = true;
      query.type = data.value.type[index].text == '全部类型' ? '' : data.value.type[index].text;
      data.value.type.forEach((ele, index1) => {
        if (index1 != index) {
          ele.checked = false;
        }
      });
      getScreenLists();
    }

    function bindCity(index) {
      data.value.city[index].checked = true;
      query.city = data.value.city[index].text == '全部地区' ? '' : data.value.city[index].text;
      data.value.city.forEach((ele, index1) => {
        if (index1 != index) {
          ele.checked = false;
        }
      });
      getScreenLists();
    }

    function bindYear(index) {
      data.value.year[index].checked = true;
      query.year = data.value.year[index].text == '全部年代' ? '' : data.value.year[index].text;
      data.value.year.forEach((ele, index1) => {
        if (index1 != index) {
          ele.checked = false;
        }
      });
      getScreenLists();
    }

    /** 加载更多 */

    const loading = ref(false);
    const finished = ref(false);

    function onLoad() {
      console.log('加载更多');
      setTimeout(() => {
        query.count += 3;
        getScreenLists();
        loading.value = false;
      }, 1000);
    }


    function bindDetails(id) {
      let text = '/movie/details/'
      if (title == '电影') {
        text = '/movie/details/'
      } else if (title == '电视剧') {
        text = '/teleplay/details/'
      }else if(title == '动漫'){
        text = '/anime/details/'
      }else{
        text = '/variety/details/'
      }
      root.$router.push(text + id)
    }

    getScreenLists();

    return {
      title,
      data,
      list,
      bindSort,
      bindType,
      bindCity,
      bindYear,
      onLoad,
      loading,
      finished,
      bindDetails
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

.body_content {
  clear_float();

  .box:nth-child(3n+2) {
    margin: 0 2%;
  }

  .box {
    background: #ebedf0;
    float: left;
    width: 32%;
    margin-bottom: 10px;
    padding: 4px;

    .img {
      width: 100%;
      height: 130px;
      position: relative;

      .clarity {
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        padding: 2px 4px;
        font-weight: 700;
      }

      .score {
        position: absolute;
        bottom: 0;
        left: 0;
        background: $mainColor;
        color: #fff;
        padding: 2px 4px;
        font-weight: 700;
      }
    }

    .pname {
      font-size: 14px;
      overflow: hidden;
      height: 20px;
    }

    .performer {
      overflow: hidden;
      height: 16px;
    }
  }
}
</style>