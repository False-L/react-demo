import React from 'react'
import ReactDOM from 'react-dom'
import '../stylesheets/app.less'
import {Icon} from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import QueueAnim from 'rc-queue-anim'

 class App extends React.Component{
   constructor(props){
     super(props)
     this.state={show:false}
     this.sideChange=this.sideChange.bind(this)
   }
  componentDidMount(){
  }
  sideChange(){
    let sideState=!this.state.show
    this.setState({show:sideState})
  }
  render(){
    return (
      <div className="app">
         <div className={this.state.show?"sidebar show":"sidebar"} onClick={this.sideChange}>
          <Sidebar />
          </div>
          <div className={this.state.show?"overlayClass":"dino"} onClick={this.sideChange}>
            diss
           </div> 
          <div className="content">
            <Header  key="a">
              <Icon type="menu-unfold" onClick={this.sideChange} className="icon"/>
            </Header>
            {this.props.children}
          </div>
      </div>
    )
  }
}

export default App
