import Mock from 'mockjs'
import userAPI from './userinfo'

// 文章相关
Mock.mock(/\/complext\/list/, 'get', userAPI.getList)