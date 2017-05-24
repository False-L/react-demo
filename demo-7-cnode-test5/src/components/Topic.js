import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import '../stylesheets/topic.less'
import {Link} from 'react-router-dom'
import '../stylesheets/github-markdown.css'
import moment from 'moment'
import { BackTop } from 'antd';
moment.locale('zh-cn');

import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users',{},{idAttribute:"loginname"});
const reply = new schema.Entity('replies', { 
    author:user
});
const article = new schema.Entity('articles', { 
    replies:[reply],
    author: user
});
//const normalizedData = normalize(data.data, article);
//.then(res=>console.log(normalize(res.data, article)))
class Topic extends Component{
    constructor(props){
        super(props);
        this.handlerReply=this.handlerReply.bind(this)
         this.state = { data:{},
        isFetching:false };
    }
    componentDidMount(){
        const {id}=this.props.match.params
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then(res=>res.json())
        .then(json=>this.setState({data:json.data,isFetching:true}))
    }
    componentDidUpdate (){ 
    }
    handlerReply(e){
        alert("ssssdd")
    }
    render(){
        const {data,isFetching}=this.state
        return(
            <div className='topic'>
                {isFetching?
                <div>
                <header className='topicHeader'> 
                <h1>{this.state.data.title}</h1>
                {localStorage.getItem('accesstoken')?<div className="topic-btn">
                    <Link to='/topic/create' className='btn'>发布话题</Link>
                </div>:""}
                </header>
                <section className='mainbar'>
                   <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='maekdown-body'/>
                </section>
                <section className="topicSide">
                <table>
                    <tbody>
                        <tr><td>创建</td><td>{moment(this.state.data.create_at).format('YYYY-MM-DD')}</td></tr>
                        <tr><td>浏览</td><td>{this.state.data.visit_count}</td></tr>
                        <tr><td>回复</td><td>{this.state.data.reply_count}</td></tr>
                    </tbody>
                </table>
                <div className="userinfo">
                    <div>
                        <img src={this.state.data.author?this.state.data.author.avatar_url:''} style={{width:'60px'}}/>
                    </div>
                        <span><Link to={this.state.data.author?'/user/'+this.state.data.author.loginname:'/user/'}>{this.state.data.author?this.state.data.author.loginname:''}</Link></span>
                </div>
                </section>
                <section className="repliesPart">
                    <div className='repliesHeader'>
                        <h2>评论区</h2>
                        <span>{this.state.data.reply_count}回复</span>
                    </div>
                    <div className="repliesMain"> 
                        {data.replies?data.replies.map((reply,i)=>
                        <div className="replyItem" key={i}>
                            <div className="replyItemMain">
                                <div className="authorAvatar">
                                    <Link to={`/user/${reply.author.loginname}`} className="user_avatar">
                                        <img src={reply.author.avatar_url} style={{height:'40px'}} title={reply.author.loginname} alt={reply.author.loginname}/>
                                    </Link>
                                </div>
                                <div className="author_comments">
                                    <div className="author_info" >
                                        <div className="user_info" >
                                            <Link to={`/user/${reply.author.loginname}`} className="reply_author">
                                            {reply.author.loginname}
                                            </Link>
                                            {i+1}楼·<Link to="" className="reply_time">{moment(reply.create_at).startOf('hour').fromNow()}</Link>
                                            {data.author.loginname==reply.author.loginname?<span id="tags"style={{background:'#f69c55',color:"#fff"}}>作者</span>:''}
                                        </div>
                                        <div className="user_action" >
                                            <span >点赞</span>
                                            <span onClick={this.handlerReply}>回复</span>
                                        </div>
                                    </div>
                                    <div className="reply_content" dangerouslySetInnerHTML={{__html:reply.content}}></div>
                                </div>
                            </div>
                        </div>
                        ):<div>暂无评论</div>
                        }
                    </div>
                </section>
                <section className="editor" style={{display:'none'}}>
                    回复
                </section>
                <BackTop />
                </div>:''}
            </div>
        )
    }
}
function  mapStateToProps(state){
    return {
            state
    }
}
export default connect(mapStateToProps)(Topic)