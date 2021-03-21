import * as React from "react"
import './Components/Header'
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import MainSpace from "./Components/MainSpace";
import Options from "./Components/Options";
import './Components/Vk.css'

function AppVk(){
    return(
        <div>
            <Header/>
            <div className={'main-content'}>
                <NavigationBar/>
                <MainSpace/>
                <Options/>
            </div>
            <div>Что то ещё</div>
        </div>
    )
}
export default AppVk