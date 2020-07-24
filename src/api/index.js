/*
 * @Author: your name
 * @Date: 2020-07-24 16:49:05
 * @LastEditTime: 2020-07-24 17:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antd4/src/api/index.js
 */
import axios from 'axios'
const api = 'http://101.201.77.210/api'
const Authorization = localStorage.getItem('Authorization');
export function getToken(params) {
  axios({
    method: 'post',
    url: api + '/auth/oauth/token',
    data: params,
    headers: {
      Authorization: 'Basic dnVlOnZ1ZQ==',
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    localStorage.setItem('Authorization','Bearer'+' '+res.data.access_token);
    resLogin()
  })
}
export function resLogin(params) {
  axios({
    method: 'get',
    url: api + '/admin/user/front/info',
    headers: {
      Authorization
    },
  }).then((res) => {
    console.log(res)
  })
}