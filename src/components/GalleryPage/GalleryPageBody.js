import React from "react";
import { useState } from "react";

export default function GalleryPageBody() {
  const [modalImage, setModalImage] = useState("img1.jpg");
  const [display, setDisplay] = useState("none");

  const pictureNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
  ];

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
      <h1 className="text-center py-[25px]">Gallery</h1>
      <div className="grid grid-cols-[auto] gap-[50px] justify-center pb-[25px] mx-[25px] tablet:grid-cols-[repeat(2,minmax(300px,400px))]">
        {pictureNames.map((name) => (
          <img
            className="w-full m-w-[400px] h-auto block cursor-pointer"
            src={images[name]}
            onClick={() => selectImage(name)}
          ></img>
        ))}
      </div>
      <div
        className="hidden fixed z-[1] w-full h-full overflow-auto bg-[rgba(0,0,0,0.85)] left-0 top-0"
        style={{ display: display }}
        onClick={close}
      >
        <span
          className="absolute text-[#f1f1f1] text-[40px] font-[bold] transition-[0.3s] right-[35px] top-[15px] hover:cursor-pointer"
          onClick={() => close()}
        >
          &times;
        </span>
        <img
          src={images[modalImage]}
          className="block w-4/5 max-w-[700px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        />
      </div>
    </>
  );
}
