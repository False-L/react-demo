import {combineReducers} from 'redux'
import {ADD_TODO,COMPLETE_TODO,SET_VIB_FILTER,VisibilityFilters} from './actions'

const {SHOW_ALL} =VisibilityFilters

const visibilityFilter=(state=SHOW_ALL,action)=>{
    switch(action.type){
        case SET_VIB_FILTER:
            return action.filter
        default:
            return state
    }
}
const todos=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
        return [
            ...state,{text:action.text,completed:false}
        ]
        case COMPLETE_TODO:
        return [
            ...state.slice(0,action.index),
            Object.assign({},state[action.index],{completed:true}),
            ...state.slice(action.index + 1)
        ]
        default:
         return state
    }
}
const todoApp= combineReducers(
    {visibilityFilter,todos}
)
export default todoApp