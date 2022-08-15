import './App.css';
import {Canvas} from "@react-three/fiber"
import { Model } from './Glb'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { KeyLight, FillLight, RimLight } from "./Lighting"
import { BackDrop, GroundPlane } from "./Stage"
import axios from "axios";
// import {useEffect} from "react"

function LoadModel(){
  return(
    <mesh>
      <PerspectiveCamera position={[0,0,1]} fov={75} makeDefault/>
      <GroundPlane />
      <BackDrop />
      <KeyLight brightness={10} color="#d2b4de" /> {/*purple shade*/}
      <FillLight brightness={2.6} color="#aed6f1" /> {/*#blue shade*/}
      <RimLight brightness={54} color="#a2d9ce" /> {/*#green shade*/}
      <Model />
      <OrbitControls />
    </mesh>
  );
}

// const apis = ["/api/models", "/api/models/1", "/api/models/2"];
// const baseurl = "http://localhost:3000/";

function ApiConfig() {
  var i = 0;
  function res_zero(){
    return(
      axios
        .get("/api/model")
      .then((res) => console.log(res.data)))
  }
  function res_one (i){
    axios
      .get("/api/model/1")
      .then(console.log("modelOne triggering"),
        modelTrigger(i)
      )
  }
  function res_two (i){
    axios
    .get("/api/model/2")
    .then((console.group("model triggering"),
      modelTrigger(i)
    ))
  }

  async function modelTrigger(i){
    const response = await fetch(`http://127.0.0.1:8000/api/${i}/triggered`);
    const json_response = await response.json();
    console.log(json_response)
  }

  const currentURL = window.location.href;
  console.log(currentURL);
  if(currentURL === "http://localhost:3000/api/model"){
    res_zero()
  }
  else if(currentURL === "http://localhost:3000/api/model/1"){
    i = 1;
    res_one(i)
  }
  else if(currentURL === "http://localhost:3000/api/model/2"){
    i = 2;
    res_two(i)
  }
}

function App() {
  return (
    <Canvas style={{ background: "silver" }}>
      <LoadModel />
      <ApiConfig />
    </Canvas>
  );
}

export default App;




