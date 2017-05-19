import React from 'react'
import {Link} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

const Topics=({posts})=>(
    <div>
    <QueueAnim delay={300} 
            className="queue-simple"
            type={['right', 'left']}>
        { posts.map((post,i)=>(
              <div className="topicItem" key={i}>
                <div className="count">
                  <div className="arrow">
                    置顶
                  </div>
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
                    <div className="views">
                      view
                    </div>
                  </div>
                <div className="itemcontainer">
                  <h3><Link to={`/topic/${post.id}`} >{post.title}</Link></h3>
                  <div className="excrept">简介</div>
                  <div className="userinfo">
                    <div className="user-action-time">
                      创建<span>{post.create_at}</span>
                      </div>
                    <div className="user-avatar">
                        <img src={post.author.avatar_url} style={{height:'32px'}}/>
                    </div>
                    <div className="user-detail">
                          {post.author.loginname}
                    </div>
                  </div>
                </div>
                </div>
        ))}
        </QueueAnim>
          </div>
       )
 export default Topics