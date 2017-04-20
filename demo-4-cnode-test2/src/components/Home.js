import React from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import CnodeMain from './CnodeMain'
import {selectCnode,fetchPostsIfNeeded,invalidateCnode} from '../actions'
import {connect}from 'react-redux'
import PropTypes from 'prop-types'
import HomeMain from './HomeMain'
import HomeHeader from './HomeHeader'

 class Home extends React.Component{
  componentDidMount(){
    const {dispatch,selectedCnode}=this.props
    dispatch(fetchPostsIfNeeded(selectedCnode))
  }
  handleClick(e,nextCnode){
     e.preventDefault()
    const { dispatch, selectedCnode } = this.props
    dispatch(selectCnode(nextCnode))
    dispatch(invalidateCnode(nextCnode))
   dispatch(fetchPostsIfNeeded(nextCnode))
  }
  render(){
    const {selectedCnode,posts,isFetching }=this.props
    const isEmpty = posts.length === 0
    return (
      <div className="main">
        <div>
          {/*nav*/}
          {!isFetching &&
            <a href="#"
               onClick={e=>this.handleClick(e,'all')}>
              全部
            </a>
          }
           {!isFetching &&
            <a href="#"
               onClick={e=>this.handleClick(e,'good')}>
              精华
            </a>
          }
           {!isFetching &&
            <a href="#"
               onClick={e=>this.handleClick(e,'share')}>
              分享
            </a>
          }
          {!isFetching &&
            <a href="#"
               onClick={e=>this.handleClick(e,'ask')}>
              问答
            </a>
          }
          {!isFetching &&
            <a href="#"
               onClick={e=>this.handleClick(e,'job')}>
              招聘
            </a>
          }
          {/*api 显示*/}
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
