import React, {useState} from "react";

function AppHooks(){

    const [counter,setCounter] = useState(0)

    const [result,setResult] = useState(0)

    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)



    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }

    function showInput(event){
        setNum1(parseInt(event.target.value,10))
        console.log(num1)
    }

    function showInput2(event){
        setNum2(parseInt(event.target.value,10))
        console.log(num2)

    }

    function add(){
    setResult(num1 + num2)
    }
    function sub(){
        setResult(num1-num2)
    }

    return(
        <div>
            <h1>Счётчик: {counter}</h1>
            <button onClick={increment} className={'btn btn-primary'}>Добавить</button>
            <button onClick={decrement} className={'btn btn-danger'}>Убрать</button>
            <div>
                <h1>Калькулятор</h1>
                <button onClick={add} className={'btn btn-primary'}>Сложение</button>
                <button onClick={()=> setResult(num1-num2) } className={'btn btn-primary'}>Вычитание</button>
                <input onInput={showInput} type={'text'} placeholder={'число 1'}/>
                <input onInput={showInput2} type={'text'} placeholder={'число 2'}/>
                <h4>Результат: {result}</h4>
            </div>
        </div>
    )
}

export default AppHooks