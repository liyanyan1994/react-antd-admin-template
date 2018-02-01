import Mock from 'mockjs'
import userAPI from './userinfo'
import articleAPI from './article'

// 用户相关
Mock.mock(/\/complext\/list/, 'get', userAPI.getList)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)