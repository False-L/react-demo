import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Hello extends React.Component{
    render(){
        const {value,text,onIClick} =this.props
        return (
        <div>
        <h1>hello redux </h1>
        <p>{value?'value有值':'开始时value为undefined'}</p>
        <span>{value}</span>
        <h2>{text}</h2>
        <hr />
        <button onClick={onIClick}>+</button>
        </div>) 
    }
}

Hello.propTypes={
        value: PropTypes.number.isRequired,
        onIClick:PropTypes.func.isRequired
    }

const action={type: 'increase',text:'action的文本内容被传入'}

const reducer=(state={count:0,text:''},action)=>{
    const count=state.count
    switch(action.type){
        case 'increase':
            return {count:count+1,text:action.text}
        default:
            return state
    }
}
const store=createStore(reducer)
const mapStateToProps=(state) => ({value:state.count,text:state.text})
const mapDispatchToProps=(dispatch)=>({onIClick:()=>dispatch(action)})

const App=connect(
mapStateToProps,
mapDispatchToProps
)(Hello)

const About=()=> (
        <div>
        <h1>about</h1>
        </div>
    )

render(
    (<Provider store={store}>
        <Router >
        <div>
        <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
            <Route exact path="/" component={App} />
            <Route path='/about' component={About} />
        </div>
        </Router>
    </Provider>),
    document.getElementById('app')
)