import React from 'react'
import {Link} from 'react-router-dom'
import {connect}from 'react-redux'
import '../../stylesheets/sidebar.less'
//75a9691d-1ebd-4fbc-a294-490ce9217e68
 class Sidebar extends React.Component{
   constructor(props){
     super(props)
     this.onSignout=this.onSignout.bind(this)
     this.state={user:''}
   }
   componentDidMount(){
       if(localStorage.getItem("accesstoken")){
       const accesstoken=JSON.parse(localStorage.getItem("accesstoken"))
       this.setState({user:accesstoken})
       }
  }
  onSignout(){
    localStorage.setItem('accesstoken','')
    this.setState({user:''})
  }
   render(){
       const {user}=this.state
       return(
           <div className="side">
            {user?
            <div className="side-main">
                  <div className="side-userinfo">      
                      <div className='user_avatar'>
                          <Link to={`/user/${user.loginname}`}><img src={user.avatar_url} /></Link>
                      </div>
                      <span>{user.loginname}</span>
                  </div>
                <div className="side-panel">
                    <div><Link to='/'>首页</Link></div>
                    <div><Link to='/?tab=good'>精华</Link></div>
                    <div><Link to='/?tab=share'>分享</Link></div>
                    <div><Link to='/?tab=ask'>问答</Link></div>
                    <div><Link to='/?tab=job'>招聘</Link></div>
                    <ul>
                      <li><Link to='/topic/create'>发布话题</Link></li>
                      <li><Link to='/messages'>消息</Link></li>
                      <li><Link to={`/user/${user.loginname}`}>详情</Link></li>
                      <li><Link to={`/topic_collect/${user.id}`}>收藏</Link></li>
                    </ul>
                </div>
            </div>:
            <div className="side-main">
                  <div className="side-userinfo">      
                      <div className='user_avatar'>
                          <Link to='/login'>sd</Link>
                      </div>
                      <span>点击头像登录</span>
                  </div>
                <div className="side-panel">
                    <div><Link to='/'>首页</Link></div>
                    <div><Link to='/?tab=good'>精华</Link></div>
                    <div><Link to='/?tab=share'>分享</Link></div>
                    <div><Link to='/?tab=ask'>问答</Link></div>
                    <div><Link to='/?tab=job'>招聘</Link></div>
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

export default Sidebar