import logo from './logo.svg';
import './App.css';
import myImage from './imgsrc.png'
import myVideo from './flappy.webm'

function App() {
  return (
    <>
     <div style={{border:'solid 1px black' , maxWidth:'100vw'}}></div>
    <h1 className="title red ">My name is zied 
    </h1>
    <br></br>
    <img src='/imgpublic.png'></img>
    <br></br>
    <br></br>
    <img src ={myImage}></img>
    
    <div/>
    <video width="500" height="400" controls>
    <source src={myVideo} type="video/webm"/>
    </video>
    
    
    </> 
  );
}


export default App;
