import React from 'react'
import PropTypes from 'prop-types'
export default function Item({todo,index}){
    return(
        <li>
            <strong>
                {index+1}
            </strong>
            {todo.title}
        </li>
    )
}