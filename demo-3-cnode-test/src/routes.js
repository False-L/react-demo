import React from 'react'
import Home from './components/Home'
import All from './components/All'
import {HashRouter as Router ,Route,Link ,Switch,Redirect } from 'react-router-dom'
import CnodeHeader from './components/CnodeHeader'


class Roots extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
const BasicRoute =() =>(
    <Router >
        <div>
            <CnodeHeader />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/getstart' component={Start} />
                <Route  path='/api' component={Api} />
                <Route  path='/about' component={About} />
                <Route  path='/signup' component={SignUp} />
                <Route  path='/signin' component={SignIn} />
                <route path='/topic/:topicid' component={Topic} />
                <Redirect from='*' to="/" />
            </Switch>
        </div>
    </Router>
)

const Good= () => (
  <div>
    <h2>Good</h2>
  </div>
)
const Share= () => (
  <div>
    <h2>Share</h2>

  </div>
)
//
const Start= () => (
  <div>
    <h2>Start</h2>
  </div>
)
const Api= () => (
  <div>
    <h2>Api</h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const SignUp= () => (
  <div>
    <h2>SignUp</h2>
  </div>
)
const SignIn= () => (
  <div>
    <h2>SignIn</h2>
  </div>
)
const Topic= () => (
  <div>
    <h2>Topic</h2>
  </div>
)

export default BasicRoute