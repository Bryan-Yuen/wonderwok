import React from "react";
import styles from "./GalleryPageBody.module.css";
import { useState } from "react";

export default function GalleryPageBody() {
  const [modalImage, setModalImage] = useState("img1.jpg");
  const [display, setDisplay] = useState("none");

  const pictureNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

  const selectImage = (img) => {
    setModalImage(img);
    setDisplay("block");
  };

  const close = () => setDisplay("none");

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context(
      "../../pictures/gallery_pictures",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <>
      <h1>Gallery</h1>
      <div className={styles['gallery-container']}>
        {pictureNames.map((name) => (
          <img src={images[name]} onClick={() => selectImage(name)}></img>
        ))}
      </div>
      <div className={styles['modal']} style={{ display: display }} onClick={close}>
        <span className={styles['close']} onClick={() => close()}>
          &times;
        </span>
        <img
          src={images[modalImage]}
          className={styles['modal-content']}
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        />
      </div>
    </>
  );
}
