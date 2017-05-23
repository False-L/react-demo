import React from 'react'
import {Link} from 'react-router-dom'
import 'whatwg-fetch'
import '../stylesheets/CreateTopic.less'

 class CreateTopic extends React.Component{
   constructor(props){
     super(props)
   }
  componentDidMount(){
    if(!localStorage.getItem("accesstoken")){
          alert('请先登录')
         this.props.history.push('/login')
      }
  }
 handleSubmit(){
   
 }
  render(){
      return(
          <div>
          <div className="createTopic">        
              <h1>发布话题</h1>
              <form className="createTopicForm" onSubmit={this.handleSubmit}>
              <label >选择版块: </label>
              <select name="tab" id="topicSelect">
                  <option value>请选择</option>
                  <option value='share'>分享</option>
                  <option value='ask'>问答</option>
                  <option value='job'>招聘</option>
              </select>
              <textarea autoFocus className="topicTitle" name="title" id="topicTitle" rows="1" placeholder="标题 10字以上">
              </textarea>
                <textarea autoFocus className="topicContent" name="t_content">
              </textarea>
              <input type="submit" value="提交" className="btn"/>
              </form>
          </div>
          </div>
      )
  }
 }
 
 export default CreateTopic