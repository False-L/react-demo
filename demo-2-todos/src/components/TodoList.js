import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends React.Component{
    render() {
        return (
            <ol>
                {this.props.todos.map(
                (todo,index)=><Todo {...todo} key={index} onClick={()=>this.props.onTodoClick(index)} />)
                    }  
            </ol>
        )
    }
}
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}