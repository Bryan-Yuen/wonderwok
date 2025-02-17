import React from "react";

export default function Footer() {
  return (
    // This is not redundant div containers, I need 2 flex so I can changethe child div to display block later
    <footer className="flex flex-col justify-center items-center bg-footer-background-color text-white min-h-footer-min-height py-[20px]">
      <div className="block min-[815px]:flex">
        <div className="py-[10px] px-[50px]">
          <b>Phone Number</b>
          <br></br>
          305-651-1171<br></br>
          (Phone is for pick-up only)<br></br>
          (For delivery, go on Doordash or Grubhub)
        </div>
        <div className="py-[10px] px-[50px]">
          <b>Hours</b>
          <br></br>
          Monday to Thursday: 11:30AM - 9:30PM<br></br>
          Friday to Saturday: 11:30AM - 10:00PM<br></br>
          Sunday: Closed
        </div>
        <div className="py-[10px] px-[50px]">
          <b>Address</b>
          <br></br>
          21313 Nw 2nd Ave<br></br>
          Miami Gardens, FL 33169
        </div>
      </div>
      <div className="mt-[20px]">© 2022 Wonder Wok</div>
    </footer>
  );
}
