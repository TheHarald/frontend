import React from 'react'
import Item from "./Item";
import PropTypes from 'prop-types';


const styles = {
    ul:{
        listStyle:'none',
        margin: 0,
        padding: 0
    }
}

function ToDoList(props){
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo,index) =>{
                return <Item todo={todo} key={todo.id} index={index} makeTask={props.onToggle}/>
            })}
        </ul>
    )
}

ToDoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default ToDoList
