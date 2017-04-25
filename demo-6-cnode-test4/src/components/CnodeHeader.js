import React from 'react';
import {NavLink} from 'react-router-dom'
import '../css/CnodeHeader.css'

export default class CnodeHeader extends React.Component{
    getNavMain(){
        return(
            <div className="cnodeHeader-nav">
                <ul>
                <li><NavLink to='/' exact className='cnodeheader-navlink' activeClassName='active-link' activeStyle={{font:'20px',color:'#222'}}>首页</NavLink></li>
                <li><NavLink to='/getstart' className='cnodeheader-navlink' activeStyle={{font:'20px',color:'#222'}}>入门</NavLink></li>
                <li><NavLink to='/api' className='cnodeheader-navlink' activeStyle={{font:'20px',color:'#222'}}>api</NavLink></li>
                <li><NavLink to='/about' className='cnodeheader-navlink' activeStyle={{font:'20px',color:'#222'}}>关于</NavLink></li>
                <li><NavLink to='/signup' className='cnodeheader-navlink' activeStyle={{font:'20px',color:'#222'}}>注册</NavLink></li>
                <li><NavLink to='/signin' className='cnodeheader-navlink' activeStyle={{font:'20px',color:'#222'}}>登录</NavLink></li>
                </ul>
            </div>
        )
    }
    render(){
        return (
            <div className="cnodeHeader">
                {this.getNavMain()}
            </div>
        )
    }
}