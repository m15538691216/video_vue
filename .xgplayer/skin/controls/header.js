import Player from 'xgplayer'
import backIcon from '../assets/back.svg'
import moreIcon from '../assets/more.svg'

let s_back = function () {
    let player = this
    let root = player.root
    let util = Player.util;
    let headerText = player.config.customize.headerText;

    let back = util.createDom('xg-header', `<div class="xg-player-header-back">
                                                  ${backIcon}
                                                  <div class="xg-player-header-back-text">${headerText}</div>
                                                </div>
                                                <div class="xg-player-header-more">${moreIcon}</div>`, {}, 'xg-player-header');


    root.appendChild(back);
    util.addClass(root, 'xgplayer-is-fullscreen-header');
    player.on('requestFullscreen', function () {
        util.removeClass(root, 'xgplayer-is-fullscreen-header');
    })

    player.on('exitFullscreen', function () {
        util.addClass(root, 'xgplayer-is-fullscreen-header')
    })
    player.once('ready', () => {
        ['click', 'touchend'].forEach(item => {
            back.querySelector('.xg-player-header-back').addEventListener(item, function (e) {
                e.preventDefault()
                e.stopPropagation()
                player.exitFullscreen(player.root)
            })
        })
    })


}


Player.use('s_back', s_back)
