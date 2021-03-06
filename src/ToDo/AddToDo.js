import React,{useState} from 'react'
import PropTypes from "prop-types";


function AddToDo({onCreate}){
    const [value,setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type={"submit"}>
                Add some
            </button>
        </form>
        )

}


AddToDo.propTyoes={
    onCreate: PropTypes.func.isRequired
}
export default AddToDo
