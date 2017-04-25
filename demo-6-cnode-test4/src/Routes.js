import React from 'react'
import Home from './components/Home'
import Topic from './components/Topic'
import {HashRouter as Router ,Route ,Switch,Redirect } from 'react-router-dom'
import CnodeHeader from './components/CnodeHeader'
import App from './App'

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

const Routes =() =>(
    <Router >
        <div>
           <App />
            <CnodeHeader />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/getstart' component={Start} />
                <Route  path='/api' component={Api} />
                <Route  path='/about' component={About} />
                <Route  path='/signup' component={SignUp} />
                <Route  path='/signin' component={SignIn} />
                <Route path='/topic/:topicid' component={Topic} />
                <Redirect from='*' to="/" />
            </Switch>
        </div>
    </Router>
)

//


export default Routes