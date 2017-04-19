import React from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import CnodeMain from './CnodeMain'
import {selectCnode,fetchPostsIfNeeded} from '../actions'
import {connect}from 'react-redux'
import PropTypes from 'prop-types'
import HomeMain from './HomeMain'

 class Home extends React.Component{
  componentDidMount(){
    const {dispatch,selectedCnode}=this.props
    dispatch(fetchPostsIfNeeded(selectedCnode))
  }
  render(){
    const {selectedCnode,posts,isFetching }=this.props
    const isEmpty = posts.length === 0
    return (
      <div className="main">
        <div>
          <nav className="homeHeader">
            <ul>
              <li>quanbu </li>
              <li>fenxiang </li>
              </ul>
            </nav>
   {isEmpty? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <HomeMain posts={posts} />
            </div>
        }
           </div> 
      </div>
    )
  }
}



function mapStateToProps(state){
  console.log("state/post"+state.posts)
  const {selectedCnode,postsByCnode}=state
  const {
    isFetching,
    items:posts
  } =postsByCnode[selectedCnode] || {
    isFetching: true,
    items: []
  }
  return{
      selectedCnode,
      posts,
      isFetching
  }
}
export default connect(mapStateToProps)(Home)
