import React from "react";
import styles from "./AboutPageBody.module.css";
import WonderWokPicture from "../../pictures/wonder_wok_outside_picture.jpg";
import SecondPic from "../../pictures/gallery_pictures/img2.jpg";

// we can dynamically switch the element position with media queries
// just use a variable with bracket styling and put html in javascript
export default function InfoPageBody() {
  return (
    <div class={styles['container']}>
      <div class={styles['about-container']}>
        <div class={styles['about-content']}>
          <p>
            <b>About</b>
            <br></br>
            Welcome to Wonder Wok. We offer American Chinese food including
            Fried Rice and Lo Mein. We also have some popular appetizers like
            Eggrolls, Chicken Wings, BBQ Ribs, and Krab Rangoons.
          </p>
          <ul>
            <li>We offer take-out and dine-in</li>
            <li>You can call to make a pick-up order</li>
            <li>
              Pick-up times are usually 15-25 minutes depending on order and
              time of day
            </li>
            <li>We do not deliver on the phone</li>
            <li>
              Please go to Doordash or Grubhub and search "Wonder Wok" for
              delivery
            </li>
          </ul>
        </div>
      </div>
      <div class={styles['about-picture']}>
        <img src={WonderWokPicture}></img>
      </div>
      <div class={styles['hours-and-location-picture']}>
        <img src={SecondPic}></img>
      </div>
      <div class={styles['hours-and-location-container']}>
        <div class={styles['hours-and-location-content']}>
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
            Miami Gardens, FL 33169<br></br>
            <br></br>
            We are located next to 441 <br></br>
            in the "Ross" plaza next to Wingstop
          </p>
        </div>
      </div>
      <div class={styles["map-container"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.220615281892!2d-80.20730518497476!3d25.97089518354223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aebe6f7bb9fd%3A0x1904ac541b0350ce!2sWonder%20Wok!5e1!3m2!1sen!2sus!4v1645939823863!5m2!1sen!2sus"
          width="1000"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
