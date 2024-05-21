import React from "react";

export default function Navbar({ Imgsrc ,activeFunction ,activepage}) {
  // let activePage = "Welcome";
  const handleClick = (page) => () => {
    activeFunction(page);
    // activePage = page
  };

  const root = document.getElementById("root");

  if(activepage =="Welcome"){
    root.style.backgroundImage=`url(${Imgsrc})`;
    // root.style.backgroundColor="red"
  }

  return (
    <center>
      <div className=" z-10 photo w-11/12 font-bold h-fit fixed mx-10 my-5 bottom-0">
        <ul className="z-10 flex flex-row gap-10 justify-center text-black">
          <li className={`z-10  text-sm cursor-pointer  ${activepage=="Albums"?"text-white":"text-black"} ${activepage=="Welcome"?"w-20 rounded-3xl gradient":""} h-6`} onClick={handleClick("Welcome")}>𝒲𝑒𝓁𝒸𝑜𝓂𝑒</li>
          <li className={`z-10 text-sm cursor-pointer ${activepage=="Albums"?"text-white":"text-black"}  ${activepage=="Story"?"w-20 rounded-3xl gradient":""}  h-6`} onClick={handleClick("Story")}>𝒮𝓉𝑜𝓇𝓎</li>
          <li className={`z-10 text-sm cursor-pointer ${activepage=="Albums"?"text-black":"text-black"} ${activepage=="Albums"?"w-20 rounded-3xl gradient":""}  h-6`} onClick={handleClick("Albums")}>𝒜𝓁𝒷𝓊𝓂𝓈</li>
          <li className={`z-10 text-sm cursor-pointer  ${activepage=="Albums"?"text-white":"text-black"} ${activepage=="About"?"w-20 rounded-3xl gradient":""}  h-6`} onClick={handleClick("About")}>𝒜𝒷𝑜𝓊𝓉</li>
        </ul>
      </div>
    </center>
  );
}
