import React from 'react'
import ReactDOM from 'react-dom'
import '../stylesheets/header.less'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="header">
            <nav className="headerNav">
            {this.props.children}            
            header
            </nav>
            </header>
        )
    }
}
export default Header