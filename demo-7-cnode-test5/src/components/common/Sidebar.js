import React from 'react'
import {Link} from 'react-router-dom'
import {connect}from 'react-redux'
import '../../stylesheets/sidebar.less'
import {selectcnode,fetchPostsIfNeeded,invalidatecnode} from '../../actions'
import avatar from'../../static/img/avatar.gif'

//75a9691d-1ebd-4fbc-a294-490ce9217e68
 class Sidebar extends React.Component{
   constructor(props){
     super(props)
     this.onSignout=this.onSignout.bind(this)
   }
   componentDidMount(){
       const {dispatch}=this.props
       if(localStorage.getItem("accesstoken")){
       dispatch({type:'SIGNIN_SUCCESS'})
       }
  }
  onSignout(){
    const {dispatch}=this.props
    dispatch({type:'SIGNOUT_SUCCESS'})
    localStorage.setItem('accesstoken','')
    
  }
    handlerClick(e,nextcnode){
    const {dispatch,selectedCnode,location}=this.props
    dispatch(selectcnode(nextcnode))
    dispatch(invalidatecnode(nextcnode))
   dispatch(fetchPostsIfNeeded(nextcnode))
  }
   render(){
       let userinfo
       if(localStorage.getItem("accesstoken")){
       userinfo=JSON.parse(localStorage.getItem("accesstoken"))
       }else{
           userinfo={}
       }
       const {loginCnode}=this.props.state
       return(
           <div className="side">
            {loginCnode.islogin?
            <div className="side-main">
                  <div className="side-userinfo">      
                      <div className='user_avatar'>
                          <Link to={`/user/${userinfo.loginname}`}><img src={userinfo.avatar_url} /></Link>
                      </div>
                      <span>{userinfo.loginname}</span>
                  </div>
                <div className="side-panel">
              <div><Link to='/' onClick={e=>this.handlerClick(e,"all")}>全部</Link></div>
              <div><Link to='/?tab=good' onClick={e=>this.handlerClick(e,"good")}>精华</Link></div>
              <div><Link to='/?tab=share' onClick={e=>this.handlerClick(e,"share")}>分享</Link></div>
              <div><Link to='/?tab=ask'  onClick={e=>this.handlerClick(e,"ask")}>问答</Link></div>
              <div><Link to='/?tab=job' onClick={e=>this.handlerClick(e,"job")}>招聘</Link></div>
                </div>
                <div className="side-panel">
                    <ul>
                      <li><Link to='/topic/create'>发布话题</Link></li>
                      <li><Link to='/messages'>消息</Link></li>
                      <li><Link to={`/user/${userinfo.loginname}`}>详情</Link></li>
                      <li><Link to={`/topic_collect/${userinfo.id}`}>收藏</Link></li>
                    </ul>
                </div>
            </div>:
            <div className="side-main">
                  <div className="side-userinfo">      
                      <div className='user_avatar'>
                          <Link to='/login'><img src={avatar} /></Link>
                      </div>
                      <span>点击头像登录</span>
                  </div>
                <div className="side-panel">
              <div><Link to='/' onClick={e=>this.handlerClick(e,"all")}>全部</Link></div>
              <div><Link to='/?tab=good' onClick={e=>this.handlerClick(e,"good")}>精华</Link></div>
              <div><Link to='/?tab=share' onClick={e=>this.handlerClick(e,"share")}>分享</Link></div>
              <div><Link to='/?tab=ask'  onClick={e=>this.handlerClick(e,"ask")}>问答</Link></div>
              <div><Link to='/?tab=job' onClick={e=>this.handlerClick(e,"job")}>招聘</Link></div>
                </div>
            </div>
              }
              <div className="side-panel">
               <div className="">
                  <a href='http://cnodejs.org'>cnode社区</a>
                </div>
               <span>作者</span>
               <span>github地址</span>
               </div>
               <div className="singout-btn">
            {localStorage.getItem('accesstoken')?
                <button className="btn" onClick={this.onSignout}>退出登录</button>
                :''}
                </div>
            </div>
       )
   }
 }
function  mapStateToProps(state){
    return {
            state
    }
}
export default connect(mapStateToProps)(Sidebar)