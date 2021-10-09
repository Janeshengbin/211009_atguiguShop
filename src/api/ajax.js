// ajax请求函数模块  返回值是 promise 对象 ，异步返回的数据是 response.data
import axios from "axios";
export default function ajax (url , data = {}, type = 'GET'){    //带有三个参数

    return new Promise(function(resolve,reject){   //在ajax外面再包一层Promise ，简化外部的调用
        // 执行异步ajax请求
        let promise 
        if (type == 'GET' ){
            // 准备url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach( key => {
                dataStr += key + '=' + data[key] +'&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('$'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url,data)
        }
        
        promise.then(function(response){   
            // 成功了调用 resolve 
            resolve(response.data)
        }).catch(function(error){
            // 失败了调用 reject 
            reject(error)
        })
    }) 
    return promise
}

// Object.keys(对象)遍历对象，返回一个对象 键值 组成的数组，又通过forEach遍历返回的数组拼接成一个 url ，这个url 屁股后面会有一个&而且没有 ？，再通过下面的那个if将&给它排除掉，在添加一个 ？ 最后发送get请求，得到一个promise对象
