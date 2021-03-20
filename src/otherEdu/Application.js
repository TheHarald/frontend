import * as React from "react"
import './Application.css'

function Application(){
    return(
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Профиль</a>
                </div>
                <div>
                    <a>Сообщения</a>
                </div>
                <div>
                    <a>Музыка</a>
                </div>
                <div>
                    <a>Новости</a>
                </div>
            </nav>
            <div className={'content'}>
                <img  src={'http://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg'}/>
            </div>

        </div>
    )
}

export default Application