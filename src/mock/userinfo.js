import Mock from 'mockjs'

const list = []
for (let i = 0;i <24;i++){
    list.push(Mock.mock({
        key: '@increment',
        userName:'@cname',
        'sex|1':['0','1'],
        age:'@integer(15,50)',
        address:Mock.Random.county(true)
    }))
}

export default{
    getList: () => {
        return {items:list}
    }
}