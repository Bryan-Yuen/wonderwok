import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const [width, setWidth] = useState("0");

  const expand = () => setWidth("100%");

  const close = () => setWidth("0");
  // USE SEPERATE LINKS FOR MENU BAR AND NAV BAR
  // JUST HIDE THE NAV BAR LINKS WITH MEDIA QUERIES
  return (
    <nav className={styles["navbar-container"]}>
      <header>
        <div className="flex items-center text-white text-2xl font-bold">
          <img width="50px" src="/wok.png" alt="wok" className={styles["wok"]}/>
          <a href="/">Wonder Wok</a>
        </div>
      </header>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Menu">Menu</a>
        </li>
        <li>
          <a href="/Gallery">Gallery</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
      </ul>
      <button className={styles["nav-button"]} onClick={expand}>
        <FontAwesomeIcon icon="fa-solid fa-bars" size="3x" />
      </button>
      {/*Invisible buffer element so I can center it as if there were 3 elements with the 2 side by side equal widths*/}
      <div className={styles["nav-filler"]}></div>
      {/*This is the accordian "modal" mobile navbar // good place to portal*/}
      <div className={styles["mobile-nav-links"]} style={{ width: width }}>
        <button className={styles["close-button"]} onClick={close}>
          <FontAwesomeIcon icon="fa-solid fa-x" size="xs" />
        </button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
