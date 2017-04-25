import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import '../css/Topic.css'

class Topic extends Component{
    constructor(props){
        super(props);
         this.state = { data:{} };
    }
    componentDidMount(){
        const {topicid}=this.props.match.params
       return fetch(`https://cnodejs.org/api/v1/topic/${topicid}`)
        .then(res=>res.json())
        .then(json=>this.setState({data:json.data}))
    }
    render(){
        console.log(this.state)
        return(
            <div className='topic'>
                <h1>{this.state.data.title}</h1>
                <span>{this.state.data.visit_count}</span>
                <h2>{this.state.data.author?this.state.data.author.loginname:'正在加载。。。'}</h2>
                <section classID='topicContent clearfix'>
                   <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='topicContentMain'/>
                </section>
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

export default connect(mapStateToProps)(Topic)