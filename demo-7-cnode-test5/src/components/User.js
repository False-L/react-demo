import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import {Link } from 'react-router-dom'
import moment from 'moment'
moment.locale('zh-cn');

class User extends Component{
    constructor(props){
        super(props);
         this.state = { data:{} };
    }
    componentDidMount(){
        const userid=this.props.match.params.loginname
        fetch(`https://cnodejs.org/api/v1/user/${userid}`)
        .then(res=>res.json())
        .then(json=>this.setState({data:json.data}))
    }
 render(){
     const {data}=this.state
    return(
        <div className='user'>
            <div className="user_info">
                <div className="userinfo">
                    <div className="user_avatar">
                        <img src={data.avatar_url} title={data.loginname} alt={data.loginname}/>
                    </div>
                    <span>{this.state.data.loginname}</span>
                    <div>github:<a href={`https://github.com/${data.githubUsername}`}>{this.state.data.githubUsername}</a></div>
                    <span>积分：{this.state.data.score}</span>
                    <p>注册时间  {moment(this.state.data.create_at).format('YYYY-MM-DD')}</p>
                </div>
            </div>
            <div className="user_topics">
                <div className="userTopics">
                    发表的话题
                    <ul>
                        {
                            data.recent_topics?data.recent_topics.map((topic,i)=>(
                            <li key={i} style={{padding:'3px'}}>
                                <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
                            </li>
                            )):""
                        }
                    </ul>
                </div>
            </div>
                <div className="userReply">
                    参与的话题
                    <ul>
                    {
                        data.recent_replies?data.recent_replies.map((reply,i)=>(
                            <li key={i}><Link to={`/topic/${reply.id}`} >{reply.title}</Link></li>
                        )):""
                    }
                    </ul>
                </div>
        </div>
    ) 
 }
}
export default User