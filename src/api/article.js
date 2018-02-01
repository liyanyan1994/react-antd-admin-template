import request from './request'

export function requestArticle() {
    return request({
      url: '/article/detail',
      method: 'get'
    })
  }