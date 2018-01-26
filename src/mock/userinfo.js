import Mock from 'mockjs'
import { param2Obj } from '../utils/index'
const List = []
for (let i = 0; i < 100; i++) {
  List.push(
    Mock.mock({
      key: '@increment',
      userName: '@cname',
      'sex|1': ['0', '1'],
      age: '@integer(10,30)',
      address: Mock.Random.county(true)
    })
  )
}

export default {
  // config is an Object {url:"/complex/list?limit=10&current=1",type:"GET",body:null}
  getList: config => {
    //
    const { current = 1, limit = 10 ,userName,sex} = param2Obj(config.url)
    let mockList = List.filter(item => {
        if (userName && item.userName.indexOf(userName) < 0) return false
        if (sex && item.sex !== sex) return false
        return true
    })
    
    const pageList = mockList.filter(
        (item, index) => index < limit * current && index >= limit * (current - 1)
    )
    return { total: mockList.length, items: pageList }
  }
}
