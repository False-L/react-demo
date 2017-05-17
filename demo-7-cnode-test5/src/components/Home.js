import React from 'react'
import '../stylesheets/home.less'
import {Link} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
import {selectcnode,fetchPostsIfNeeded,invalidatecnode} from '../actions'
import {connect}from 'react-redux'
import Topics from './Topics'

 class Home extends React.Component{
   constructor(props){
     super(props)
   }
  componentDidMount(){
    const {dispatch,selectedCnode,location}=this.props
    dispatch(fetchPostsIfNeeded(selectedCnode))
    if(location.search){
    const str=location.search.split("=")
    console.log(str[1])
    dispatch(selectcnode(str[1]))
    dispatch(invalidatecnode(str[1]))
   dispatch(fetchPostsIfNeeded(str[1]))
    }
  }
  handlerClick(e,nextcnode){
    const {dispatch,selectedCnode,location}=this.props
    console.log(nextcnode)
    dispatch(selectcnode(nextcnode))
    dispatch(invalidatecnode(nextcnode))
   dispatch(fetchPostsIfNeeded(nextcnode))
  }
  render(){
    const {posts,isFetching }=this.props
    console.log(this.props)
    const isEmpty = posts.length === 0
    return (
      <div className="main" key="b">
          <div className="mainbar">
            <QueueAnim delay={300} 
            className="queue-simple"
            type={['right', 'left']}>
            <div className="mainnav" key="a">
              <h1>所有主题</h1>
             <div id="tabs">
              <Link to='/?tab=all' className={this.props.location.search==='?tab=all'?'active':this.props.location.search===""?"active":""}
              onClick={e=>this.handlerClick(e,"all")}>全部</Link>
              <Link to='/?tab=good' className={this.props.location.search==='?tab=good'?'active':''}
              onClick={e=>this.handlerClick(e,"good")}>精华</Link>
              <Link to='/?tab=share' className={this.props.location.search==='?tab=share'?'active':''}
              onClick={e=>this.handlerClick(e,"share")}>分享</Link>
              <Link to='/?tab=ask' className={this.props.location.search==='?tab=ask'?'active':''}
              onClick={e=>this.handlerClick(e,"ask")}>问答</Link>
              <Link to='/?tab=job' className={this.props.location.search==='?tab=job'?'active':''}
              onClick={e=>this.handlerClick(e,"job")}>招聘</Link>
              </div>
            </div>
            <div className="topics" key="b">
          {/*api 显示*/}
   {isEmpty? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <Topics posts={posts}/>}
        </div>
            </QueueAnim>
            </div>
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
