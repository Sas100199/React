import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

function App() {
  
 return (
    <>
    <Navbar/>
     <Welcome name={"inpname"} age={"inpage"}/>
     <Advertise  head={`Your Name is ${"inpname"} and age is ${"inpage"}`}/>
    <button onClick={clickbutton}>Click</button>
    </>
  );
}

export default App;

// Props
function Welcome({name,age}){
  return <h1> Hello {name}, Nice meeting you. {age}</h1> 
}
function Advertise({head,cont}){
    return <marquee> {head}, {cont}</marquee>
}
// Events

function clickbutton(){
      alert("Hello")
}
fun5ion