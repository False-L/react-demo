import React from 'react'
import {Link } from 'react-router-dom'

export default class CnodeMain extends React.Component{
    render(){
        return (
            <nav>
            <Link to='/tab/all'>全部</Link>
            <Link to='/tab/good'>精华</Link>
            <Link to='/tab/share'>分享</Link>
            <Link to='/tab/ask'>问答</Link>
            <Link to='/tab/job'>招聘</Link>
            </nav>
        )
    }
}