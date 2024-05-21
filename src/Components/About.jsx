import React from "react";
import Ceremony from "./Ceremony";
  // "" 22
export default function About() {
  return (
    <div>
      {/* sangit
      haldi
      Mahendi
      barat
      varmala 
      kanyadan
      Reception  */}
      <div className="container5 w-screen h-fit">
        <Ceremony title={"Sangeet"} date={"14-December"} time={"10:00 PM"} flag={true} />
        <Ceremony title={"Mandap"} date={"14-December"} time={"11 AM"} flag={false} />
        <Ceremony title={"Barat"} date={"15-December"} time={"9:00 AM"} flag={true} />
        <Ceremony title={"Varmala"}  date={"15-December"} time={"12:00 PM"}flag={false} />
        <Ceremony title={"Kanyadan"} date={"15-December"} time={"1:00 PM"}flag={true} />
        <Ceremony title={"Reception"} date={"16-December"} time={"10:00 PM"} flag={false} />
        
      </div>
    </div>
  );
}
