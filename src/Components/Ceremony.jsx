import React from "react";

export default function Ceremony({title,date,time,flag}) {
 let bgc = "";
  const  iconCollection={
    Sangeet : "https://iili.io/JizVaqP.png" ,
    Mandap :"https://iili.io/JizjAa1.png",
 
  Barat :"https://iili.io/JizjwwG.png",
  Varmala :"https://iili.io/JizwlRe.png",
  Kanyadan : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AbyTGOF8pzpUi6RXKXco9SaRQHvgx-I36sdJX5nHZw&s",
  Reception :"https://iili.io/JizOI6l.png" 


  }
  
  if(flag) bgc = 'c11'
  else bgc = "c22"
    return (
    <>
    
        <div className={`${bgc}`}>
           <h1 className="text-8xl font-medium relative left-5 title2">{title}</h1>
            <div className="underline my-3"></div>
            <img srcSet={iconCollection[title]} alt=""   className=" drop-shadow w-40 h-40 icons "/>    
            <div className="info text-left mx-6 text-lg font-semibold ">Date:- {date}
            <br />
            Time:- {time}</div>
        </div>
    </>
  );
}
