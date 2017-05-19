import {combineReducers} from 'redux'
import { REQUEST_POSTS,
        RECEIVE_POSTS,
        SELECT_CNODE,
        INVALIDATE_CNODE,
        SIGNIN,
        SIGNOUT
     } from './actions'

//action类型
function selectedCnode(state='all',action){
    switch(action.type){
        case SELECT_CNODE:
            return action.cnode
        default:
            return state
    }
}

//
function posts(state={
    isFetching: false,
    didInvalidate: false,
    items:[]
},action){
    switch(action.type){
        case INVALIDATE_CNODE:
            return{
                ...state,
                didInvalidate:true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching:true,
                didInvalidate:false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching:false,
                didInvalidate:false,
                items:action.posts,
            }
        default:
            return state
    }
}
function postsByCnode (state = { }, action) {
  switch (action.type) {
    case INVALIDATE_CNODE:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.cnode]: posts(state[action.cnode], action)
      }
    default:
      return state
  }
}


function loginByCnode(state={islogining:false,user:''},action){
    switch(action.type){
        case SIGNIN:
        return {
            ...state,
            islogining:true,
            user:action.user
        }
        case SIGNOUT:
        return {
            ...state,
            islogining:false,
            user:''
        }
        default:
        return state
    }
}
const Reducer= combineReducers(
    {postsByCnode,selectedCnode,loginByCnode}
)
export default Reducer

