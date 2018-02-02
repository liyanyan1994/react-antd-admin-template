import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox,Icon} from 'antd'

const TodoItem = ({ onToggle, onRemove, completed, text }) => {
  return (
    <li className="todo-item">
      <Checkbox checked={completed} onClick={onToggle}>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {text}
        </span>
      </Checkbox>
      <Icon type="close" onClick={onRemove} style={{color:"#f81d22",float:"right",lineHeight:'unset'}}  />
    </li>
  )
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
