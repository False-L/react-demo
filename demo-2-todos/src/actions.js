export const ADD_TODO='ADD_TODO'
export const COMPLETE_TODO= 'COMPLETE_TODO'
export const SET_VIB_FILTER='svf'

export const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}
export const addTodo=(text)=>(
    {type:ADD_TODO,text}
)
export const completeTodo=(index)=>(
    {type:COMPLETE_TODO,index}
)
export const setVibFilter=(filter)=>(
    {type:SET_VIB_FILTER,filter}
)