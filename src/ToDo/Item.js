import React,{useContext} from 'react'
import PropTypes from "prop-types";
import './Item.css'
import Context from '../Context'





function Item({todo,index,makeTask}){
    const {removeToDo} = useContext(Context)
    const classes = []

    if(todo.completed){
        classes.push('done')
    }

    return(
        <li className={'style-todo'}>
            <span className={classes.join(' ')}>
                <input
                    type={'checkbox'}
                    className={'tab8px'}
                    onChange={()=>makeTask(todo.id)}
                    checked={todo.completed}
                />
            <strong className={'tab4px'}>{index+1}</strong>
                {todo.title}
            </span>
            <button className={'button-exit'} onClick={removeToDo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}

Item.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    makeTask: PropTypes.func.isRequired
}

export default Item