import './App.css';
import button from './res/button.svg'
import logo from  './res/logo.svg'
import info from  './res/info.svg'


function App() {
  return(
      <div>
          <Header/>
          <Info/>
      </div>);

}


function Header(){
  return(
      <div className={'Header'}>
        <Logo/>
      </div>
  );
}

function Logo(){
    return(
        <div className={'Logo'}>
            <img src={logo}/>
        </div>
    );
}

function Info(){
    return(
        <div className={'Logo'}>
            <img src={info}/>
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
      <div>
        <img src={button}/>
        </div>
  );
}

export default App;