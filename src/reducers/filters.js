import {filterTypes,SET_FILTER} from '../actions/actionTypes'

export default (state=filterTypes.ALL,action) => {
    switch(action.type){
        case SET_FILTER:{
            return action.filter
        }
        default: {return state}
    }
}