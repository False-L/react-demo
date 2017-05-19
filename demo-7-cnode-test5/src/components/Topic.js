import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import '../stylesheets/topic.less'
import {Link} from 'react-router-dom'
import '../stylesheets/github-markdown.css'
import moment from 'moment'
moment.locale('zh-cn');

class Topic extends Component{
    constructor(props){
        super(props);
         this.state = { data:{} };
    }
    componentDidMount(){
        const {id}=this.props.match.params
       return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then(res=>res.json())
        .then(json=>this.setState({data:json.data}))
    }
    render(){

        const {data}=this.state
        return(
            <div className='topic'>
                <header className='topicHeader'> 
                <h1>{this.state.data.title}</h1>
                <div className="topic-btn">
                    <Link to='/topic/create' className='btn'>发布话题</Link>
                </div>
                </header>
                <section className='mainbar'>
                   <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='maekdown-body'/>
                </section>
                <section className="topicSide">
                <table>
                    <tbody>
                        <tr><td>创建</td><td>{this.state.data.create_at}</td></tr>
                        <tr><td>浏览</td><td>{this.state.data.visit_count}</td></tr>
                        <tr><td>回复</td><td>{this.state.data.reply_count}</td></tr>
                        <tr><td>作者</td><td>{this.state.data.author?this.state.data.author.loginname:''}</td></tr>
                    </tbody>
                </table>
                </section>
                <section className="replies">
                    <div className='repliesHeader'>
                        <h2>回复</h2>
                    </div>
                    <div className="repliesMian"> 
                        {data.replies?data.replies.map((reply,i)=>
                        <div className="" key={i}>
                            <div className="author">
                            <Link to={`/user/${reply.author.loginname}`}>
                                <img src={reply.author.avatar_url} style={{height:'40px'}} title={reply.author.loginname} alt={reply.author.loginname}/>
                            </Link>
                             <div className="author_info" >
                                <Link to={`/user/${reply.author.loginname}`} className="reply_author">{reply.author.loginname}</Link>
                                {i+1}楼·<Link to="" className="reply_time">  {moment(reply.create_at).startOf('hour').fromNow()}</Link>
                                {data.author.loginname==reply.author.loginname?<span style={{font:'20px',background:'#61DAFB'}}>作者</span>:''}
                            </div>
                            <div className="user_action" >
                                <span >点赞</span>
                                <span >回复</span>
                            </div>
                        
                <div className="reply_content" dangerouslySetInnerHTML={{__html:reply.content}}></div>
                </div>
                </div>
                        ):<div>暂无评论</div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}
export default Topic