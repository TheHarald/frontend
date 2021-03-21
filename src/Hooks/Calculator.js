import React, {useState} from 'react'
import './BtnSpace.css'


function Calculator() {

    const[num1,setNum1] = useState('')
    const[num2,setNum2] = useState('')
    const[symbol,setSymbol] = useState('')
    const [result,setResult] = useState('')

    function InputNumber(num){
        if(symbol === ''){
            setNum1(num1+num)
        }
        else{
            setNum2(num2+num)
        }
    }

    function del(){
        if(num2 !== ''){
            setNum2(num2.slice(0,-1))
        }else if(num2===''){
            setSymbol('')
        }
        if(num2==='' && symbol===''){
            setNum1(num1.slice(0,-1))
        }
    }

    function clear(){
        setNum1('')
        setNum2('')
        setSymbol('')
        setResult('')
    }

    function calc(){
        if(symbol==='+') setResult(parseFloat(num1)+parseFloat(num2))
        if(symbol==='-') setResult(parseFloat(num1)-parseFloat(num2))
        if(symbol==='*') setResult(parseFloat(num1)*parseFloat(num2))
        if(symbol==='/') setResult(parseFloat(num1)/parseFloat(num2))
        if(symbol==='^') setResult(Math.pow(parseFloat(num1),parseFloat(num2)))

    }

    return(
        <div >

            <div>
                <h1>Калькулятор</h1>
            </div>

            <div className={'btn-space'}>
                <button onClick={()=>InputNumber('1')} className='btn btn-primary' >1</button>
                <button onClick={()=>InputNumber('2')} className='btn btn-primary' >2</button>
                <button onClick={()=>InputNumber('3')} className='btn btn-primary' >3</button>
                <button onClick={()=> setSymbol('+')} className='btn btn-info'>+</button>
                <button onClick={()=> setSymbol('*')} className='btn btn-info'>*</button>
                <button onClick={()=> setSymbol('^')} className='btn btn-info'>^</button>
                <button onClick={()=> clear()} className='btn btn-danger'>Очистить</button>
            </div >

            <div className={'btn-space'}>
                <button onClick={()=>InputNumber('4')}  className='btn btn-primary' >4</button>
                <button onClick={()=>InputNumber('5')}  className='btn btn-primary' >5</button>
                <button onClick={()=>InputNumber('6')}  className='btn btn-primary' >6</button>
                <button onClick={()=> setSymbol('-')} className='btn btn-info'>-</button>
                <button onClick={()=> setSymbol('/')} className='btn btn-info'>/</button>
                <button onClick={()=>calc()} className='btn btn-info'>=</button>
                <button onClick={()=>del()} className='btn btn-danger'>&lt;</button>

            </div>


            <div className={'btn-space'}>
                <button onClick={()=>InputNumber('7')}  className='btn btn-primary' >7</button>
                <button onClick={()=>InputNumber('8')}  className='btn btn-primary' >8</button>
                <button onClick={()=>InputNumber('9')}  className='btn btn-primary' >9</button>
                <button onClick={()=>InputNumber('0')} className='btn btn-primary'>0</button>
                <button onClick={()=>InputNumber('.')} className='btn btn-info'>.</button>
            </div>

            <h4>{num1}</h4>
            <h4>{symbol}</h4>
            <h4>{num2}</h4>
            <h4>{result}</h4>

        </div>
    )
}

export default Calculator