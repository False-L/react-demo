import React from 'react'
import {Link} from 'react-router-dom'
import 'whatwg-fetch'
import {signin} from '../actions'
import {connect}from 'react-redux'

 class Login extends React.Component{
   constructor(props){
     super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={islogining:false}
   }
  componentDidMount(){
    const {dispatch,islogining}=this.props
    if(localStorage.getItem('accesstoken')){
      this.setState({islogining:true})
    }
  }
 handleSubmit(e){
     const {dispatch}=this.props
    e.preventDefault();
    let accesstoken=this.input.value;
    if(!accesstoken)  return alert('输入不能为空');
    fetch('https://cnodejs.org/api/v1/accesstoken',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            accesstoken: accesstoken,
        })
    }).then(res=>{
        if(res.status>=200&&res.status<300){
            return res
        }else{
        var err = new Error(res.statusText)
        err.res = res
        throw err
        }
    }).then(res=>res.json())
    .then(data=>{
        localStorage.setItem("accesstoken",JSON.stringify(data))
        dispatch({type:'SIGNIN_SUCCESS'})
        this.props.history.push('/')
    })
    .catch(function(err){
        alert('登录失败');
    })
 }
  render(){
      return(
          <div>
          {!this.state.islogining?
          <div className="loginmain">        
              <h1>填入你的accesstoken</h1>
              <form onSubmit={this.handleSubmit}>
              <label >
              <input type="text" ref={node=>this.input=node} className="access" placeholder="accesstoken"/>
              </label>
              <input type="submit" value="登录" className="submit"/>
              </form>
          </div>:<div>已经登陆</div>}
          </div>
      )
  }
 }
 function  mapStateToProps(state){
    return {
            state
    }
}
 export default connect(mapStateToProps)(Login)