import React from 'react'
import Item from "./Item";


const styles = {
    ul:{
        listStyle:'none',
        margin: 0,
        padding: 0
    }
}

export  default function ToDoList(props){
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo,index) =>{
                return <Item todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    )
}