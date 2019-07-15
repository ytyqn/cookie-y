import Cookie from '../src/cookie.y'

let root = document.getElementById('root')
let cookie = ''

let p = document.createElement('p')
root.appendChild(p)

function showCookie(){
    p.innerText = `cookie:${cookie}`
}
showCookie()

let button = document.createElement('button')
button.innerText='set and get'
button.onclick = () => {
    Cookie.set('dream', 'Y')
    cookie = Cookie.get('dream')
    showCookie()
}
root.appendChild(button)

let button2 = document.createElement('button')
button2.innerText='remove'
button2.onclick = () => {
    Cookie.remove('dream')
    cookie = Cookie.get('dream')
    showCookie()
}
root.appendChild(button2)


