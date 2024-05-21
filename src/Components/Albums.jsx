import React, { useState } from "react";

export default function Albums() {
  const photoCollection = {
    1: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-1.jpeg",
    2: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Couple-Poses-Arjun-kamath-3.jpeg",
    3: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/04/Indian-Prewedding-Couple-Poses-Arjun-kamath-31.jpeg",
    4: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Couple-Poses-Arjun-kamath-5.jpeg",
    5: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-11.jpeg",
    6: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-17.jpeg",
    7: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-20.jpeg",
    8: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-28.jpeg",
    9: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-29.jpeg",
    10: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-30.jpeg",
    11: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-22.jpeg",
    12: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-9.jpeg",
    13: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/04/Indian-Prewedding-Couple-Poses-Arjun-kamath-32.jpeg",
    14: "https://kamatharjun.b-cdn.net/wp-content/uploads/2021/03/Indian-Prewedding-Photography-Arjun-kamath-21.jpeg",
  };

  const numberOfPhotos = Object.keys(photoCollection).length;
  const [photo, setPhoto] = useState(1);
  const [key, setKey] = useState(0); // State for forcing re-render
  const [animationClass, setAnimationClass] = useState("fade-in-right"); // State for animation class

  function handleClick(photoNumber, direction) {
    if (photoNumber < 1) {
      setPhoto(numberOfPhotos);
    } else if (photoNumber > numberOfPhotos) {
      setPhoto(1);
    } else {
      setPhoto(photoNumber);
    }

    setAnimationClass(direction === "left" ? "fade-in-left" : "fade-in-right");
    setKey((prevKey) => prevKey + 1); // Update key to re-trigger animation
  }

  return (
    <>
      <center>
        <div className="slider w-screen h-screen bg-black">
          <div className="photoslider w-screen h-screen">
            <img
              key={key} // Key for re-triggering animation
              srcSet={photoCollection[photo]}
              alt=""
              className={`${animationClass} w-screen h-screen object-contain`}
            />
          </div>
          <div className="control flex flex-row gap-6 w-28 h-32">
            <div
              className="dir prev h-10 w-10 flex justify-center rounded-bl-full"
              onClick={() => handleClick(photo - 1, "left")}
            >
              <i className="fa-solid text-2xl self-center fa-backward text-white"></i>
            </div>
            <div
              className="dir next h-10 w-10 flex justify-center rounded-bl-full"
              onClick={() => handleClick(photo + 1, "right")}
            >
              <i className="fa-solid text-2xl self-center fa-forward text-white"></i>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
