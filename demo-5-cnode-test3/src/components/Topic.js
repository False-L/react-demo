import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import {render} from 'react-dom'

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
        const {topicid}=this.props.match.params
        console.log(this.state)
        return(
            <div>
                <h1>{this.state.data.title}</h1>
                <span>{this.state.data.visit_count}</span>
                <h2>{this.state.data.author?this.state.data.author.loginname:'正在加载。。。'}</h2>
                <section id='sss'>
                   <div dangerouslySetInnerHTML={{__html:this.state.data.content}} />
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