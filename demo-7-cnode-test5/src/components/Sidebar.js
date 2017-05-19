import React from 'react'
import {Link} from 'react-router-dom'
import {connect}from 'react-redux'

 class Sidebar extends React.Component{
   constructor(props){
     super(props)
   }
   componentDidMount(){
  }
   render(){
       return(
           <div className="side">
            {!this.props.islogining?
            <div className="">
                  已经登陆
                  <ul>
                      <li>发布话题</li>
                      <li>未读消息</li>
                      <li>我的信息</li>
                      <li>我的收藏</li>
                    </ul>
            </div>:
              <div className="login">
                  <Link to='/login'>点击头像登录</Link>
              </div>
              }
              <div className="siderItem">
               <div><Link to='/'>首页</Link></div>
               <div className="">
                   cnode中文社区
                </div>
               <div>作者</div>
               <div>github地址</div>
               </div>
               {!this.props.islogining?
                <div>退出登录</div>:''}
            </div>
       )
   }
 }
function mapStateToProps(state){
  const {loginByCnode}=state
  const {islogining,user}=loginByCnode
  return{
      islogining,
      user
  }
}
export default connect(mapStateToProps)(Sidebar)