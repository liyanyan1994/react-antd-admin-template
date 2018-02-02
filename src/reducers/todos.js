import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionTypes'

import initState from './state'

export default (state = initState.todoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [{ id: action.id, text: action.text, completed: false }, ...state]
    }
    case TOGGLE_TODO: {
        return state.map((todoItem)=>{
            if(todoItem.id === action.id){
                return {...todoItem,completed:!todoItem.completed}
            }else{
                return todoItem
            }
        })
    }
    case REMOVE_TODO: {console.log();
        return state.filter((todoItem) => {
            return todoItem.id !== action.id
        })
    }
    default:{
        return state
    }
  }
}
