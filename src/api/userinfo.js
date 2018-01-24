import request from './request'

export function requestList() {
    return request({
        url:'/complext/list',
        methods: 'get'
    })
}