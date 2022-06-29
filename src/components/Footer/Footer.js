import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    // This is not redundant div containers, I need 2 flex so I can changethe child div to display block later
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <p>
          <b>Phone Number</b>
          <br></br>
          305-651-1171<br></br>
          (Phone is for pick-up only)<br></br>
          (For delivery, go on Doordash or Grubhub)
        </p>
        <p>
          <b>Hours</b>
          <br></br>
          Monday to Thursday: 11:30AM - 9:30PM<br></br>
          Friday to Saturday: 11:30AM - 10:00PM<br></br>
          Sunday: Closed
        </p>
        <p>
          <b>Address</b>
          <br></br>
          21313 Nw 2nd Ave<br></br>
          Miami Gardens, FL 33169
        </p>
      </div>
    </footer>
  );
}
