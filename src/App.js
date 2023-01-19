import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {Greet} from './Greet'

function App() {
  // const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const style = {
    padding:'10px 20px',
    border:'none',
    borderRadius:'5px',
    outline:'none',
    boxShadow:'0 0 5px 0 rgba(0,0,0,0.2)',
    fontSize:'1.2rem',
    margin:'10px 10px'

  }

  const buttonStyle = {
    backgroundColor:"blue",
    color:"white",
    padding:'10px 20px',
    border:'none',
    borderRadius:'5px',
    outline:'none',
    boxShadow:'0 0 5px 0 rgba(0,0,0,0.2)',
    fontSize:'1.2rem',
    margin:'10px 10px',
    cursor:'pointer'
  }

  const [isClicked , setClicked] = useState(false);
  // const names = inputValue;
  // let nameValue =""
  function showFunc() {
    setClicked(!isClicked)
    // setInputValue("")
    // nameValue = inputValue;
    // setInputValue("")
    console.log(inputValue)
  }
  return (
    <div className="App">
      <h1>Enter your name : </h1>
        <input style={style} type="text" placeholder='Enter something...' value={inputValue}  onChange={e => setInputValue(e.target.value)}/>
        <button onClick={showFunc} style={buttonStyle}>Submit</button>
        {isClicked?<Greet name = {inputValue}/>:null}

    </div>  
  )
}

export default App