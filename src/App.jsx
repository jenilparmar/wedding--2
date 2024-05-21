import { useState } from "react";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import Albums from "./Components/Albums";
import About from "./Components/About";

export default function App() {
  const [activepage , setActivePage]=useState("Welcome");

  
  function handlePage(page) {
    setActivePage(page);
  }
  return (
    <>
   <Navbar activeFunction ={handlePage} activepage={activepage} Imgsrc = {"https://iili.io/JP6HmlV.md.jpg"}/>
   {activepage=="Welcome"?<Homepage/>:undefined}
   {activepage=="Story"?<Story activeFunction ={handlePage} activePage={activepage}/>:undefined}
   {activepage=="Albums"?<Albums/>:undefined}
   {activepage=="About"?<About/>:undefined}
    </>
  )
}