const Cookie = {
    timezone: 8
}

export const setTimeZone = (num) => {
  Cookie.timezone = num
}

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
    if(typeof(expire) === 'number'){
        exdate.setSeconds(exdate.getDate() + expire)
    } else {
        let day = /[0-9]*d/i
        let month = /[0-9]*M/
        let year = /[0-9]*y/i
        let hour = /[0-9]*h/i
        let minute = /[0-9]*m/
        let second = /[0-9]*s/i
        let num = parseInt(expire.slice(0, expire.length - 1))
        if (day.test(expire)) {
            exdate.setDate(exdate.getDate() + num)
        } else if (month.test(expire)) {
            exdate.setMonth(exdate.getMonth() + num)
        } else if (year.test(expire)) {
            exdate.setFullYear(exdate.getFullYear() + num)
        } else if (hour.test(expire)) {
            exdate.setHours(exdate.getHours() + num)
        } else if (minute.test(expire)) {
            exdate.setMinutes(exdate.getMinutes() + num)
        } else if (second.test(expire)) {
            exdate.setTime(exdate.getTime() + num)
        } else {
            console.error('Error: %s (%i)','expire is wrong!',500)
        }
    }
    exdate.setTime(exdate.getTime() + Cookie.timezone*3600*1000)
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
Cookie.setTimeZone = setTimeZone

export default Cookie
