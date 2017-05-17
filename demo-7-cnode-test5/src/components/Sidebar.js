import React from 'react'
import {Link} from 'react-router-dom'

 class Sidebar extends React.Component{
   constructor(props){
     super(props)
     {console.log(this.props)}
   }
   componentDidMount(){
        {console.log(this.props)}
  }
   render(){
       return(
           <div className="side">
              <div className="login">
                  <Link to='/login'>点击头像登录</Link>
              </div>
              <div className="siderItem">
               <div><Link to='/'>首页</Link></div>
               <div>发布话题</div>
               <div>关于</div>
               </div>
               <div className="">
                </div>
            </div>
       )
   }
 }
 export default Sidebar