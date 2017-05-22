import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
moment.locale('zh-cn');


function switchSpn(post){
  if(post.top) return "置顶";
  if(post.good) return "精品";
  switch(post.tab){
    case "share": return '分享';
    case "ask": return '问答';
    default : return '招聘';
   }
}
function switchStyle(post){
  if(post.top) return "top";
  if(post.good) return "good";
  switch(post.tab){
    case "share": return 'share';
    case "ask": return 'ask';
    default : return 'job';
   }
}
const Topics=({posts})=>(
    <div className="">
        { posts.map((post,i)=>(
              <div className="topicItem" key={i}>
                    <div className="user-avatar">
                        <Link to={`/user/${post.author.loginname}`}>
                        <img src={post.author.avatar_url} 
                        title={post.author.loginname+`创建于`+moment(post.create_at).startOf('hour').fromNow()} 
                        style={{height:'32px'}}
                        />
                        </Link>
                    </div>
                <div className="count">
                  <div className="stats">
                      <div className="commentscount">
                        <span>{post.reply_count}</span>
                        <div className="watch" style={{fontSize:"10px",color:"#ddd"}}>
                        评论
                        </div>
                      </div>
                      <div className="watches">
                        <span>{post.visit_count}</span>
                        <div className="watch" style={{fontSize:"10px",color:"#ddd"}}>
                          浏览
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="itemcontainer">
                  <div className="userinfo">
                    <div className="user-action-time">
                      <span>最新回复:{moment(post.last_reply_at).startOf('hour').fromNow()}</span>
                    </div>
                  </div>
                  <h3>
                    <span id="tags" className={switchStyle(post)}>{switchSpn(post)}</span>
                    <Link to={`/topic/${post.id}`} >{post.title}</Link>
                  </h3>
                </div>
                </div>
        ))}
          </div>
       )
 export default Topics