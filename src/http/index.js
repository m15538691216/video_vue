import * as MyUser from './apis/user'
import * as MyVideo from './apis/video'
import * as MyCommon from './apis/common'
import * as MyFound from './apis/found'
import * as MyDanmaku from './apis/danmaku'
import * as MyTeleplay from './apis/teleplay';
import * as MyAnime from './apis/anime'
import * as MyVariety from './apis/variety'

export const { login, userInfo, getrefreshToken, qiniuToken } = MyUser
export const { getVideo, getVideoDetails } = MyVideo
export const { getScreen, getSearch, getScreenList, getRecomList } = MyCommon
export const { foundUpdate, foundGetData } = MyFound
export const { getDanmaku } = MyDanmaku
export const { teleplayGetList, teleplayDetails } = MyTeleplay
export const { animeGetList, animeGetDetails } = MyAnime
export const { varietyGetList, varietyGetDetails } = MyVariety