import React from 'react'
import AddTodo from '../components/AddTodo' 
import Footer from '../components/Footer'
import TodoList  from '../components/TodoList'
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVibFilter,VisibilityFilters} from '../actions'
import PropTypes from 'prop-types'

 class App extends React.Component{
  render(){
    const {dispatch,visibleTodos,visibilityFilter}=this.props
    return (
      <div>
        <h1>hello </h1> 
        <AddTodo onAddClick={text=>dispatch(addTodo(text))}/>
        <TodoList todos={visibleTodos} 
        onTodoClick={index=>dispatch(completeTodo(index))}/>
        <Footer filter={visibilityFilter} onFilterChange={nextFilter=>dispatch(setVibFilter(nextFilter))}/>
      </div>
    )
  }
}/*
App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}*/

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}
//const selectTodos=(todos,filter)=>todos

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

/*包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent)
mapStateToProps 函数接收整个 Redux store 的 state 作为 props，然后返回一个传入到组件 props 的对象。
该函数被称之为 selector。
参考使用 reselect 高效地组合多个 selector ，并对 收集到的数据进行处理。
*/
export default connect(select)(App)