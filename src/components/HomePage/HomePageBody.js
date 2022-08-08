import { useState, useRef, useEffect } from 'react';
//import homePagePicture from "../../pictures/orange_chicken_picture.jpg";
import img1 from '../../pictures/gallery_pictures/img1.jpg';
import img5 from '../../pictures/gallery_pictures/img5.jpg';
import img6 from '../../pictures/gallery_pictures/img6.jpg';
import img7 from '../../pictures/gallery_pictures/img7.jpg';
import styles from './HomePageBody.module.css';

export default function HomePageBody() {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlideIndexRef = useRef(0);
  activeSlideIndexRef.current = slideIndex
  const pictureContainerRef = useRef()
  const [slides, setSlides] = useState()

  useEffect(() => {
    const slidesList = pictureContainerRef.current.querySelectorAll('picture')
    slidesList[0].classList.add(styles['active'])
    setSlides(slidesList)
  }, [])

  // this is a useful trick to not use the first render which will use the undefined state and only use the second render
  useEffect(() => {
    if(slides)
      window.setInterval(() => showSlide("next"), 5000)
  }, [slides])

  const showSlide = (action) => {
    slides[activeSlideIndexRef.current].classList.remove(styles['active'])
    //console.log(slides[slideIndex])
    switch (action) {
      case '0':
        setSlideIndex(0)
        slides[0].classList.add(styles['active'])
        break;
      case '1':
        setSlideIndex(1)
        slides[1].classList.add(styles['active'])
        break;
      case '2':
        setSlideIndex(2)
        slides[2].classList.add(styles['active'])
        break;
      case '3':
        setSlideIndex(3)
        slides[3].classList.add(styles['active'])
        break;
      case 'prev':
        if (activeSlideIndexRef.current === 0) {
          slides[3].classList.add(styles['active'])
          setSlideIndex(3);
        } else {
          slides[activeSlideIndexRef.current - 1].classList.add(styles['active'])
          setSlideIndex((prev) => prev - 1);
        }
        break;
      case 'next':
        if (activeSlideIndexRef.current === 3) {
          slides[0].classList.add(styles['active'])
          setSlideIndex(0);
        } else {
          slides[activeSlideIndexRef.current + 1].classList.add(styles['active'])
          setSlideIndex((prev) => prev + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <section ref={pictureContainerRef} className={styles['picture-container']}>
      <picture className={`${styles['picture-slide']} ${styles['fade']}`}>
        <img src={img1} alt="Outside of Restaurant"></img>
      </picture>
      <picture className={`${styles['picture-slide']} ${styles['fade']}`}>
        <img src={img5} alt="Bucket of Special Fried Rice"></img>
      </picture>
      <picture className={`${styles['picture-slide']} ${styles['fade']}`}>
        <img src={img6} alt="Container of Vegetable Soup"></img>
      </picture>
      <picture className={`${styles['picture-slide']} ${styles['fade']}`}>
        <img src={img7} alt="Container of Bourbon Chicken"></img>
      </picture>
      <a className={styles['menu-button']} href="Menu">
        View Menu
      </a>
      <a className={styles['prev']} onClick={() => showSlide('prev')}>
        &#10094;
      </a>
      <a className={styles['next']} onClick={() => showSlide('next')}>
        &#10095;
      </a>
      <div className={styles['dots-container']}>
        <span className={styles['dot']} onClick={() => showSlide('0')}></span>
        <span className={styles['dot']} onClick={() => showSlide('1')}></span>
        <span className={styles['dot']} onClick={() => showSlide('2')}></span>
        <span className={styles['dot']} onClick={() => showSlide('3')}></span>
      </div>
    </section>
  );
}
