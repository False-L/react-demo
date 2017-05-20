import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS='REQUEST_POSTS'
export const RECEIVE_POSTS='RECEIVE_POSTS'
export const SELECT_CNODE='SELECT_CNODE'
export const INVALIDATE_CNODE='INVALIDATE_CNODE'

export function invalidatecnode(cnode) {
  return {
    type: INVALIDATE_CNODE,
    cnode
  }
}
export function selectcnode(cnode){
    return{
    type:SELECT_CNODE,
    cnode
    }
}

export function requestPosts(cnode) {
  return {
    type: REQUEST_POSTS,
    cnode
  }
}
export function receivePosts(cnode,json) {
  return {
    type: RECEIVE_POSTS,
    cnode,
    posts:json.data
  }
}
export function fetchPosts(cnode){
    return dispatch=>{
        dispatch(requestPosts(cnode))
        return fetch(`https://cnodejs.org/api/v1/topics?tab=${cnode}&limit=30`)
        .then(res=>res.json())
        .then(json=>dispatch(receivePosts(cnode,json)))
    }
}
const shouldFetchPosts = (state, cnode) => {
  const posts = state.postsByCnode[cnode]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = cnode => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), cnode)) {
    return dispatch(fetchPosts(cnode))
  }
}
