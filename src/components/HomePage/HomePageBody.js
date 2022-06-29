import React from "react";
import homePagePicture from "../../pictures/orange_chicken_picture.jpg";
import styles from "./HomePageBody.module.css";

export default function HomePageBody() {
  return (
    <section className={styles["picture-container"]}>
      <picture>
        <img src={homePagePicture} alt="Orange chicken"></img>
      </picture>
      <a href="Menu">View Menu</a>
    </section>
  );
}
