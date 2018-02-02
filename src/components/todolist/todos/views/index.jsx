import React from 'react'
import AddToDo from './addTodo'
import TodoList from './todoList'
import './index.css'


export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <AddToDo />
        <TodoList />
      </div>
    )
  }
}
