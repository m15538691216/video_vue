import Cookies from 'js-cookie'

const ACCESSTOKEN = 'ACCESSTOKEN';
const REFRESHTOKEN = 'REFRESHTOKEN';

export function getAccessToken() {
  return Cookies.get(ACCESSTOKEN)
}

export function setAccessToken(token) {
  return Cookies.set(ACCESSTOKEN, token, { expires: 27 })
}


export function removeAccessToken() {
  return Cookies.remove(ACCESSTOKEN)
}



export function getRefreshToken() {
  return Cookies.get(REFRESHTOKEN)
}

export function setRefreshToken(token) {
  return Cookies.set(REFRESHTOKEN, token, { expires: 27 })
}

export function removeRefreshToken() {
  return Cookies.remove(ACCESSTOKEN)
}
