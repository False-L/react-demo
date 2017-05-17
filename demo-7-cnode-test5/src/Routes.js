import React from 'react'
import Home from './components/Home'
import {HashRouter as Router ,Route ,Switch,Redirect } from 'react-router-dom'
import App from './components/App'
import Login from './components/Login'

const Routes =() =>(
    <Router >
        <App>
        <div className="container" >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Redirect from='*' to="/" />
            </Switch>
        </div>
        </App>
       
    </Router>
    
)

//
export default Routes