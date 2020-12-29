import * as MyUser from './apis/user'
import * as MyVideo from './apis/video'
import * as MyCommon from './apis/common'

export const { login, userInfo, getrefreshToken } = MyUser
export const { getVideo } = MyVideo
export const { getLabel } = MyCommon