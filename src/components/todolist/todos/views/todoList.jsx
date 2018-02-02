import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './todoItem'
import { filterTypes } from '../../../../actions/actionTypes'
import { toggleTodo, removeTodo } from '../../../../actions/actions';
const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const selectvisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.ALL:
      return todos
    case filterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case filterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
    default:
      throw new Error('unsupported filter')
  }
}

const mapStateToProps = (state) => {
  return { todos: selectvisibleTodos(state.todos, state.filter) }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)