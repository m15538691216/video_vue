document.addEventListener('plusready', function (a) {
    var first = '';
    plus.key.addEventListener('backbutton', function () {
      //获取地址栏目中的url
      var urls = location.hash
	//判断是一级页面的时候点击两次退出app
      if (urls === '#/' || urls === '#/found' || urls === '#/main/index') {
        if (new Date().getTime() - first < 2000) {
          plus.runtime.quit();//表示退出app
        } else {
          plus.nativeUI.toast('再按一次退出应用')
          first = new Date().getTime();
        }
      } else {
        history.go(-1)
      }
    }, false)
}) 