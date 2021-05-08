import Cookies from 'js-cookie'

const ACCESSTOKEN = 'ACCESSTOKEN';
const REFRESHTOKEN = 'REFRESHTOKEN';

export function getAccessToken() {
  return Cookies.get(ACCESSTOKEN) || localStorage.getItem(ACCESSTOKEN)
}

export function setAccessToken(token) {
  localStorage.setItem(ACCESSTOKEN,token)
  return Cookies.set(ACCESSTOKEN, token, { expires: 27 })
}


export function removeAccessToken() {
  localStorage.removeItem(ACCESSTOKEN)
  return Cookies.remove(ACCESSTOKEN)
}



export function getRefreshToken() {
  return Cookies.get(REFRESHTOKEN) || localStorage.getItem(REFRESHTOKEN)
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESHTOKEN,token)
  return Cookies.set(REFRESHTOKEN, token, { expires: 27 })
}

export function removeRefreshToken() {
  localStorage.removeItem(REFRESHTOKEN)
  return Cookies.remove(REFRESHTOKEN)
}

export function setLocalStorage(key, value) {
  if (prototypeToString(value) === 'Array') {
    localStorage.setItem(key, JSON.stringify(value));
  } else if (prototypeToString(value) === 'Object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

export function getLocalStorage(key){
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return localStorage.getItem(key);
  }
}
  
export function prototypeToString(item) {
  let res = Object.prototype.toString.call(item);
  let type = res.substring('8', res.length - 1);
  return type;
}
