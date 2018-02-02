import React from 'react'
import Todos from './todos/views/index'
import Filters from './filters/views/filters'
import { Card } from 'antd'

function Todo() {
  return (
    <Card>
      <Todos />
      <Filters />
    </Card>
  )
}

export default Todo