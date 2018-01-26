import request from './request'

export function requestList(query) {
    return request({
        url:'/complext/list',
        methods: 'get',
        params: query
    })
}