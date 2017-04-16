import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component{
    renderFilter(filter,name){
        if(filter === this.props.filter){
            return name
        }
        return (
            <a href ='#' onClick= {e=>{
                e.preventDefault()
                this.props.onFilterChange(filter)
                }}>
                {name}
            </a>
        )
    }
    render(){
        return(
            <div><p>
            {' '}
                {this.renderFilter('SHOW_ALL', '全部')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', '完成的')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', '活动的')}
                .
                </p>
            </div>
        )
    }
}