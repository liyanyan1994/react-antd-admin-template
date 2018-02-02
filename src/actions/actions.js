import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO, SET_FILTER} from './actionTypes'
let nextToDOId = 0;

export const addTodo = (text) => ({
    type:ADD_TODO,
    completed: false,
    id: nextToDOId ++,
    text: text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const setFilter = filterType => ({
    type: SET_FILTER,
    filter: filterType
})