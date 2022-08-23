import './App.css';
import {Canvas} from "@react-three/fiber"
import { ApiConfig } from './URLAPI';
import { LoadModel } from './ModelLoad';
import { useState } from 'react';
import { modelTrigger} from './CallAPI'
import { onLogin } from './Login';
import {onSignup} from './Singup';

let click = false;
function onAnimate(){
  console.log("animate cliecked");
  console.log(click);
  click = !click;
  window.zx = click;
}

function App() {
  const [index, setIndex] = useState('');

  const onValuechange = event => {
    setIndex(event.target.value);
    console.log(event.target.value);
  }

  const onButton = event => {
    event.preventDefault();
    console.log(index);
    if(index === '1' || index === '2'){
      modelTrigger(index);
      // window.location.reload(true);
    }
    else{
      window.alert("Invalid index");
    }
  }
  
  return (
    <>
      <header className='header'>
        <input type="text" id="index" placeholder="index" onChange={onValuechange} value={index} required></input>
        <button className='btn' id="button" onClick={onButton}>Go</button>
        <button className='btn' id="animate" onClick={onAnimate}>Animate</button>
        <input type="text" id="username" placeholder="username" required></input>
        <input type="password" id="password" placeholder="password" required></input>
        <input type="button" className='btn' id="login" value="Log in" onClick={onLogin}></input>
        <button className='btn'id="signup" onClick={onSignup}>Sign up</button>
      </header>
      <Canvas style={{ background: "silver" }}>
        <LoadModel />
        <ApiConfig />
      </Canvas>
    </>
  );
}

export default App;




