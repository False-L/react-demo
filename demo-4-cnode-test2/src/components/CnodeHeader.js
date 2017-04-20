import React from 'react';
import cnodelogo from '../img/cnodelogo.svg';
import {Link} from 'react-router-dom'

export default class CnodeHeader extends React.Component{
    getLogo(){
        return (
            <div className="cnodeHeader-logo">
                <a className='cnodeHeader-logo-link' href="https://cnodejs.org"><img src={cnodelogo} /></a>
            </div>
        )
    }
    getNavMain(){
        return(
            <div className="cnodeHeader-nav">
                <Link to='/' className='cnodeheader-navlink'>首页</Link>
                <Link to='/getstart'className='cnodeheader-navlink'>新手入门</Link>
                <Link to='/api' className='cnodeheader-navlink'>API</Link>
                <Link to='/about' className='cnodeheader-navlink'>关于</Link>
                <Link to='/signup' className='cnodeheader-navlink'>注册</Link>
                <Link to='/signin' className='cnodeheader-navlink'>登录</Link>
            </div>
        )
    }
    render(){
        return (
            <div className="cnodeHeader">
                {this.getLogo()}
                {this.getNavMain()}
            </div>
        )
    }
}