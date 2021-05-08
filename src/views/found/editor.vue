<template>
  <div>
    <van-nav-bar left-text="取消" @click-left="$router.go(-1)" @click-right="getHtml">
      <template #right>
        <div class="right_but">
          发布
        </div>
      </template>
    </van-nav-bar>
    <div class="editor-box" id="editor-box">
      <div class="editor" id="editor" ref="editor" contenteditable="true" data-text="会说就多说点" @keydown="change">
      </div>
      <div class="placeholder" ref="placeholder">会说就多说点</div>
    </div>
    <div class="uploader-box">
      <van-uploader v-model="fileList" multiple :max-count="4" :before-read="beforeRead" :before-delete="beforeDele" />
    </div>
    <div class="huati van-hairline--top van-hairline--bottom">
      <div class="title">添加话题获得更多曝光</div>
      <div class="list" v-show="showItem">
        <div class="item" v-for="(h,index) in items" :key="index" @click="bindItem(h.value)">{{h.value}}</div>
      </div>
      <div class="img_box van-hairline--top ">
        <van-icon name="smile-o" />
        <van-uploader v-model="fileList" multiple :before-read="beforeRead" :max-count="4" :preview-image="false" capture="camera">
          <van-icon name="photo-o" />
        </van-uploader>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, reactive, onMounted } from '@vue/composition-api';
import { foundUpdate, qiniuToken } from '@/http';
import qiniu from '../../utils/qiniu'

export default {
  setup(props, { refs, root }) {

    const editor = ref(null);
    const placeholder = ref(null);
    function getHtml() {
      Update(editor.value.innerHTML);
    }

    function change(event) {
      if (editor.value.innerHTML == `<p data-we-empty-p=""><br></p>`) {
        placeholder.value.style.display = "block"
        if (event.keyCode == 8) {
          event.preventDefault();
        }
      } else {
        placeholder.value.style.display = "none";
      }

    }


    //可编辑div获取坐标
    const getDivPosition = function (element) {
      var caretOffset = 0;
      var doc = element.ownerDocument || element.document;
      var win = doc.defaultView || doc.parentWindow;
      var sel;
      if (typeof win.getSelection != "undefined") {//谷歌、火狐
        sel = win.getSelection();
        if (sel.rangeCount > 0) {//选中的区域
          var range = win.getSelection().getRangeAt(0);
          var preCaretRange = range.cloneRange();//克隆一个选中区域
          preCaretRange.selectNodeContents(element);//设置选中区域的节点内容为当前节点
          preCaretRange.setEnd(range.endContainer, range.endOffset);  //重置选中区域的结束位置
          caretOffset = preCaretRange.toString().length;
        }
      } else if ((sel = doc.selection) && sel.type != "Control") {//IE
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
      }
      return caretOffset;
    }


    onMounted(() => {
      editor.value.innerHTML = "<p data-we-empty-p><br></p>"
    })

    /** 选择话题 */
    const items = reactive([{ value: '#害羞的糖糖#', id: 0, checked: false }, { value: '#害羞的糖糖2#', id: 1, checked: false }]);
    const showItem = ref(true)

    function bindItem(value) {
      const Editor = document.getElementById('editor');
      if (editor.value.innerHTML == `<p data-we-empty-p=""><br></p>`) {
        editor.value.children[0].innerHTML = `<b style="color:red;font-weight:normal" contenteditable="false">${value}</b>\r`
      } else {
        editor.value.children[0].innerHTML = editor.value.children[0].innerHTML.concat(`<b style="color:red;font-weight:normal" contenteditable="false">${value}</b>\r`);
      }

      showItem.value = false;
    }


    /** 上传数据 */

    function Update(text) {
      foundUpdate({ text: text, file: JSON.stringify(fileList.value) }).then(res => {
        if (res.code == 200) {
          root.$toast.success();
          editor.value.innerHTML = "<p data-we-empty-p><br></p>"
          fileList.value = [];
        }
      })
    }

    /** 上传图片模块 */
    const files = reactive(ref([]));
    const fileList = reactive(ref([]));


    async function beforeRead(file) {
      const length = file.length ? file.length : 0;
      const { qiniuToken } = await qiniu.getQiniuToken();
      if (qiniuToken) {
        if (length > 1) {
          for (let i = 0; i < length; i++) {
            qiniu.qiniudnUploader(qiniuToken, file[i], file[i].lastModified, (res => {
              console.log(res.test + res.key);
              fileList.value.push({ url: res.test + res.key, isImage: true });
            }));
          }
        } else {
          qiniu.qiniudnUploader(qiniuToken, file, file.lastModified, (res => {
            console.log(res.test + res.key);
            fileList.value.push({ url: res.test + res.key, isImage: true });
          }));
        }
      }
    }

    function beforeDele(file) {
      console.log(fileList);
      console.log(file);
      // return true
    }


    return {
      getHtml,
      editor,
      placeholder,
      items,
      bindItem,
      showItem,
      change,
      fileList,
      beforeRead,
      beforeDele
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-nav-bar >>> .van-nav-bar__content .van-nav-bar__text {
  color: #000;
}

.right_but {
  padding: 4px 14px;
  background: blue;
  border-radius: 4px;
  color: #fff;
}

.huati {
  position: fixed;
  bottom: 0;
  width: 100%;

  .title {
    padding: 10px;
    color: #ddd;
  }

  .list {
    padding: 0 10px 10px;
    display: flex;
    white-space: nowrap;
    overflow: auto;

    .item {
      padding: 2px 4px;
      background: #eee;
      border-radius: 2px;
      margin-right: 6px;

      &--checked {
        opacity: 0.4;
      }
    }
  }
}

.img_box {
  padding: 5px 10px;
  display: flex;

  .van-icon {
    font-size: 18px;
    margin-right: 10px;
  }
}

.editor-box {
  position: relative;

  .placeholder {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 14px;
    color: #ddd;
    z-index: -1;
  }
}

.uploader-box {
  padding: 4px;
}

.editor {
  min-height: 20vh;
  outline: 0px;
  font-size: 14px;
  padding: 4px;
  word-wrap: break-word;
  word-break: break-all;
}

[contentEditable=true]:empty:not(:focus):before {
  content: attr(data-text);
  color: #ddd;
}
</style>