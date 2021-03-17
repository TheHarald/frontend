import './App.css';
import button from './res/button.svg'
import logo from  './res/logo.svg'
import info from  './res/info.svg'
import buner from './res/buner.svg'
import docs from './res/docs.svg'
import logo_left from './res/logo_left.svg'



function App() {
  return(
      <div>
          <Header/>
          <ButtonBlue/>

      </div>);

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