import './App.css';
import {Canvas} from "@react-three/fiber"
import { useState, useEffect} from 'react';
import { onLogin } from './Login';
import {onSignup} from './Singup';
import { BackDrop, GroundPlane } from "./Stage"
import { KeyLight, FillLight, RimLight } from "./Lighting"
import { OrbitControls } from '@react-three/drei'; //PerspectiveCamera,
import {Asset} from './LoadGlb'

let click = false;
function onAnimate(){
  click = !click;
  window.zx = click;
}

function App() {
  const [model, setModel] = useState('');
  let newmodel = [];
  let data;

  const url = "http://127.0.0.1:8000/model/cache";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        data = json.models;
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

  useEffect(() => {
    fetchData();
  }, [model]);

  // const fileRef = useRef();

  // const uploadChange = (e) => {
  //   const [file] = e.target.files;
  //   console.log(file);
  //   const options = {
  //     // url: "http://127.0.0.1:8000/api/upload",
  //     url: "http://127.0.0.1:8000/file/upload/",
  //     method: "POST",
  //     headers: {
  //       //  multipart/form-data
  //       Accept: "application/glb",
  //       "Content-Type": "application/glb",
  //     },
  //     data: {file: file},
  //   }
  //   axios(options)
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log("failed")
  //     })
  // }
  
  const onValuechange = event => {
    newmodel.push(event.target.value);
    console.log(event.target.value);
  }

  const onButton = event => {
    event.preventDefault();
    console.log(data);
    let inputModel = newmodel[newmodel.length-1]+'.glb';
    if(data.includes(inputModel)){
      console.log("if true");
      setModel(newmodel[newmodel.length-1]);
    }
    setModel(newmodel[newmodel.length-1]);
  }

  const onUpload = () => {
    console.log("upload clicked");
    window.open("http://127.0.0.1:8000/upload");
    fetchData();
  }

  return (
    <>
      <header className='header'>
        <input type="text" id="index" placeholder="model" onChange={onValuechange} value={newmodel[newmodel.length-1]} required></input>{/**/}
        <button className='btn' id="button" onClick={onButton}>Go</button>
        <button className="btn" id='upload' onClick={onUpload}>Upload</button>
        {/* <button className='btn' id="upload" onClick={() => fileRef.current.click()}>Upload</button>
        <input type="file" id="model" ref={fileRef} onChange={uploadChange} multiple={false} style={{'display':'none'}} name="model_upload"></input> */}
        <button className='btn' id="animate" onClick={onAnimate}>Animate</button>
        <input type="text" id="username" placeholder="username" required></input>
        <input type="password" id="password" placeholder="password" required></input>
        <input type="button" className='btn' id="login" value="Log in" onClick={onLogin}></input>
        <button className='btn'id="signup" onClick={onSignup}>Sign up</button>
      </header>
      {/* <iframe title='model' src="http://127.0.0.1:8000/upload" width={1000} height={500} ></iframe> */}
      <Canvas >
        <GroundPlane />
        <BackDrop />
        <KeyLight brightness={10} color="#2e86c1" /> {/*purple shade #d2b4de*/}
        <FillLight brightness={2.6} color="#FFFFFF" /> {/*#blue shade #aed6f1*/}
        <RimLight brightness={54} color="#5d6d7e" /> {/*#green shade #a2d9ce*/}
        <OrbitControls />
        {model === ''?  <Asset url={`http://127.0.0.1:8000/load/car`} /> : <Asset url={`http://127.0.0.1:8000/load/${model}`} />}
      </Canvas>
    </>
  );
}

export default App;


