import './App.css';
import button from './res/button.svg'
import logo from  './res/logo.svg'
import info from  './res/info.svg'
import buner from './res/buner.svg'
import docs from './res/docs.svg'
import logo_left from './res/logo_left.svg'
import ToDoList from "./ToDo/ToDoList";
import Item from "./ToDo/Item";
import * as React from "react";
import Context from './Context'
import AddToDo from "./ToDo/AddToDo";


function App() {

    const [todos,setToDos] = React.useState([
        {id:1, completed:false, title:'Доделать теорвер.'},
        {id:2, completed:false, title:'Доделать джаву.'},
        {id:3, completed:false, title:'Доделать питон.'}
    ])



    function toggleToDo(id){
        setToDos(todos.map(todo =>{
            if(todo.id === id){
                todo.completed =!todo.completed
            }
            return todo
        })
        )
    }

    function removeToDo(id){
        setToDos(todos.filter(todo=> todo.id !== id))
    }

    function addToDo(title){
        setToDos(todos.concat([{
                title,
                id: Date.now(),
                completed: false
            }]))
    }

    return(
        <Context.Provider value={{removeToDo}}>
            <div className={'wrapper'}>
                <h2>Test string</h2>
                {todos.length ? <ToDoList todos={todos} onToggle={toggleToDo}/> : <p> no todos</p> }
                {/*<AddToDo onCreate={addToDo()}/>*/}
            </div>
        </Context.Provider>
    );
}



function Header(){
  return(
      <div className={'Header'}>
          <div className={'Logo'}>
              <img src={logo}/>
          </div>
          <div className={'Info'}>
              <img src={info}/>
          </div>
          <div className={'Docs'}>
              <img src={docs}/>
          </div>
          <div className={'Logo-left'}>
              <img src={logo_left}/>
          </div>
      </div>
  );
}


function Buner(){
    return(
        <div className={'Buner'}>
            <img src={buner}/>
        </div>
    );
}

function Some(){
  return(<div>
    <ul>
      <p>Text</p>
      <li>some text</li>
      <li>now text</li>
      <li>bet text</li>
      <li>some same</li>
    </ul>
  </div>);
}


function ButtonBlue(){
  return(
      <div className={'Button'}>
        <img src={button}/>
        </div>
  );
}

export default App;