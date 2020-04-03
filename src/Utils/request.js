import axios from 'axios';
import QS from 'qs';
// import store from '../store/index'
import Cookies from 'js-cookie'
// import { message } from 'ant-design-vue';

axios.defaults.timeout = 5000; //请求超时
axios.defaults.baseURL ='http://172.81.239.79:8082/';
// axios.defaults.baseURL ='http://127.0.0.1:8082/';

axios.defaults.transformRequest = [obj => QS.stringify(obj)];  //https://www.jianshu.com/p/b22d03dfe006

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
axios.interceptors.request.use(
  config => {
    
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // let token = store.getters.getToken;
    // if(token){
    //   config.headers['token'] = token;
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//响应拦截
axios.interceptors.response.use(
  response => {
    // console.log('响应数据',response)
    // if(response.data.status == 201){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    if(response.data.status === 100){
      // message.error(response.data.message);
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data={}){
   console.log('请求参数',data)
   return new Promise((resolve,reject) => {
     axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
   })
 }
//  /**
//  * 封装form请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function form(url,data={}){
//   console.log('请求参数',data)
//   return new Promise((resolve, reject) =>{
//     let token = store.getters.getToken;
//     let formData = new FormData();
//     for(let item in data) {
//       formData.append(item, data[item]);
//     }
//     /*console.log(token)*/
//     const instance=axios.create({
//       withCredentials: false,
//       baseURL:'http://127.0.0.1:8082/',
//       headers: {
//         'token': token? token: '',
//         'Content-Type': `multipart/form-data`
//       }
//     });
//     instance.post(url, formData).then(res =>{
//       console.log(res)
//       // if(res.status === 200) {
//       //   resolve(res);
//       // }else {
//       //   reject(res);
//       // }
//     })
//   });
// }