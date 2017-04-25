import '../css/Home.css'
import React from 'react'
import {selectCnode,fetchPostsIfNeeded,invalidateCnode} from '../actions'
import {connect}from 'react-redux'
import HomeMain from './HomeMain'
import { Link } from 'react-router-dom'


 class Home extends React.Component{
  componentDidMount(){
    const {dispatch,selectedCnode}=this.props
    dispatch(fetchPostsIfNeeded(selectedCnode))
  }
  handleClick(e,nextCnode){
    // e.preventDefault()
    const { dispatch} = this.props
    dispatch(selectCnode(nextCnode))
    dispatch(invalidateCnode(nextCnode))
   dispatch(fetchPostsIfNeeded(nextCnode))
  }
  render(){
    const {posts,isFetching }=this.props
    console.log(this.props)
    const isEmpty = posts.length === 0
    const {search}=this.props.location
    return (
      <div className="main">
        <div className='mainNav'>
          {/*nav*/} 
          <ul className='mainNavItems'>     
           <li className='mainNavItem'><Link to='/?tab=all' className={search==='?tab=all'?'mainactive':'inactive'} onClick={e=>this.handleClick(e,'all')}>全部</Link ></li>
           <li className='mainNavItem'><Link to='/?tab=good' className={search==='?tab=good'?'mainactive':'inactive'} onClick={e=>this.handleClick(e,'good')} >精华</Link ></li>
           <li className='mainNavItem'><Link to='/?tab=share' className={search==='?tab=share'?'mainactive':'inactive'} onClick={e=>this.handleClick(e,'share')}  >分享</Link ></li>
           <li className='mainNavItem'><Link to='/?tab=ask'  className={search==='?tab=ask'?'mainactive':'inactive'} onClick={e=>this.handleClick(e,'ask')} >问答</Link ></li>
           <li className='mainNavItem'><Link to='/?tab=job'  className={search==='?tab=job'?'mainactive':'inactive'} onClick={e=>this.handleClick(e,'job')} >招聘</Link ></li>
          </ul>
        </div> 
          {/*api 显示*/}
   {isEmpty? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }} className="mainItemList">
              <HomeMain posts={posts} />
            </div>
        }
      </div>
    )
  }
}
function mapStateToProps(state){
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
