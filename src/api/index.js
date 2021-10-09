// 接口请求函数的模块 不能用默认暴露。 利用 ajax请求 返回的都是 promise对象
// 要学会经过接口文档写出请求函数，命名、参数名都要和文档一模一样
import ajax from './ajax'     // 这个是隔壁封装好的函数
 
// 1、根据经纬度获取位置详情  get  http://localhost:4000/position/:geohash    
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)     //  (geohash)是参数 ajax后面的是路劲

// 2、获取食品分类列表  get   http://localhost:4000/index_category        
export const reqFoodTypes = () => ajax('/index_category') 

// 3、根据经纬度获取商铺列表    get   http://localhost:4000/shops  
export const reqShopLists = (longitude,latitude) => ajax('/shops',{longitude,latitude})    //latitude是纬度  longitude是精度

// 4、根据经纬度和关键字搜索商铺列表    get     http://localhost:4000/search_shops

// 5、获取一次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出