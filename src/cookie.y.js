const Cookie = {}

export const getCookie = (name) => {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return arr[2]
  } else {
    return null
  }
}

export const setCookie = (name, value, expire) => {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expire)
  document.cookie = name + '=' + escape(value) + ((expire == null) ? '' : ';expires=' + exdate.toGMTString())
}

export const removeCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}

Cookie.get = getCookie
Cookie.set = setCookie
Cookie.remove = removeCookie

export default Cookie
