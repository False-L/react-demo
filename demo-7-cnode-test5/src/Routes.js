import React from 'react'
import Home from './components/Home'
import {HashRouter as Router ,Route ,Switch,Redirect } from 'react-router-dom'
import App from './components/App'
import Login from './components/Login'
import Topic from './components/Topic'

const Routes =() =>(
    <Router >
        <App>
        <div className="container" >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/topic/:id' component={Topic} />
                {/*
                <Route path='/topic/create' component={CreateTopic} />
                <Route path='/messages' component={Messages} />
                <Route path='/user/:loginname' component={User} />
                <Route path='/topic_collect/:loginname' component={Collect} />*/}
                <Redirect from='*' to="/" />
            </Switch>
        </div>
        </App>
       
    </Router>
    
)

//
export default Routes