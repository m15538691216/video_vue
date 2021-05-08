import Player from 'xgplayer';


let s_LSwiperMaker = function () {
    let player = this;
    let root = player.root
    let util = Player.util;
    let control = false;
    let sPos = {};
    let mPos = {};
    let dire = null;


    player.on('requestFullscreen', function (e) {
        console.log('全屏');
        root.addEventListener('touchstart', touchstart, false);
        root.addEventListener('touchmove', touchmove, false);
        root.addEventListener('touchend', touchend, false);
    })

    player.on('exitFullscreen', function () {
        console.log('退出全屏');
        root.removeEventListener('touchstart', touchstart, false);
        root.removeEventListener('touchmove', touchmove, false);
        root.removeEventListener('touchend', touchend, false);
    })

    function touchstart(e) {
        // e.preventDefault()
        e.stopPropagation()
        var point = e.touches ? e.touches[0] : e;
        sPos.x = point.screenX;
        sPos.y = point.screenY;
    }

    function touchmove(e) {
        // e.preventDefault()
        e.stopPropagation()
        var point = e.touches ? e.touches[0] : e;
        control = true;
        mPos.x = point.screenX;
        mPos.y = point.screenY;
    }

    function touchend(e) {
        // e.preventDefault()
        e.stopPropagation()
        !control ? dire = null : mPos.x > sPos.x ? dire = 'R' : dire = 'L';
        // !control ? dire = null : mPos.y > sPos.y ? dire = 'D' : dire = 'U';
        let time = (mPos.x - sPos.x) / 10
        control = false;
        root.removeEventListener('touchend', touchend, false);
        !control ? dire = null : mPos.x > sPos.x ? dire = 'R' : dire = 'L';
        if (dire == 'R' && player.currentTime < player.duration - 10) {
            player.currentTime += Math.abs(time);
        } else if (dire == 'L' && player.currentTime > 10) {
            player.currentTime -= Math.abs(time);
        }
    }

}


Player.use('s_LSwiperMaker', s_LSwiperMaker)