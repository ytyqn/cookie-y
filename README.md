# cookie-y
### 安装
###### 通过npm安装
```
npm install cookie-y --save
```

### 使用
```
import Cookie from 'cookie-y'

// 可以设置时区,默认为8,中国时间
Cookie.setTimeZone(8)

// 设置Cookie, 无过期时间设置
Cookie.set('name', ‘Y’)

// 设置Cookie,JSON数据, 无过期时间设置
Cookie.set('name', {id:1,test: '1212'})

// 设置Cookie, 及过期时间设置
// 过期时间默认单位为秒,过期时间为1小时
Cookie.set('name', ‘Y’, 3600000)
// 过期时间单位为小时,过期时间为1小时
// Y/y 年;M 月;D/d 天;H/h 小时;m 分钟;S/s 秒;
Cookie.set('name', ‘Y’, '1h')

// 获取Cookie的'name'值
Cookie.get('name')

// 删除Cookie的'name'
Cookie.remove('name')
```



