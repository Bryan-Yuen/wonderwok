import styles from './MenuPageBody.module.css';
//import './MenuPageBody.css'
import SideBar from './SideBar';
import Menu from './Menu';
import * as menu from '../../menu_items/MenuExports.js';
import { useRef, useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { useMediaQuery } from 'react-responsive';

//testing experiment branch

/* you can do some hover styling don't forget*/
export default function MenuPageBody() {
  const menuRef = useRef(null);
  const sideBar = useRef(null);
  const activeSlideRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const headerRefs = useRef([]);
  const categoriesRefs = useRef([]);
  headerRefs.current = new Array(16);
  categoriesRefs.current = new Array(16);
  const [screenSizeBoolean, setScreenSizeBoolean] = useState();

  activeIndexRef.current = activeIndex;

  smoothscroll.polyfill();

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    setScreenSizeBoolean(matches);
    console.log('screen changed');
    console.log(matches);
  };

  // i can just hardcode it and assume the user will just load with their screen size and won't change but this use case
  // is for the 1% change it does happen and the user changes their screen for some reason
  const isItPhone = useMediaQuery(
    { maxWidth: 815 },
    undefined,
    handleMediaQueryChange
  );

  //const [menuCategories, setMenuCategories] = useState()

  useEffect(() => {
    //setMenuCategories(sideBar.current.querySelectorAll("a"))
    console.log('im going to print isitphone // screensizeboolean');
    console.log(screenSizeBoolean);
    activeSlideRef.current.classList.add(styles['active']);
    //activeSlideRef.current.classList.add("active")
    console.log(headerRefs.current);
    // callback gets called everytime there is a change in intersection either from 0 or 1
    const observer = new IntersectionObserver(
      (entries) => {
        // current index must be memoized or tracked outside of function for comparison
        let localActiveIndex = activeIndexRef.current;

        // track which elements register above or below the document's current position
        const aboveIndeces = [];
        const belowIndeces = [];

        // usually you are dealing with one at a time but if like 3 elments pop up in a fast time then this will loop through all 5
        entries.forEach((element) => {
          const boundingClientRectY =
            typeof element.boundingClientRect.y !== 'undefined'
              ? element.boundingClientRect.y
              : element.boundingClientRect.top;
          const rootBoundsY =
            typeof element.rootBounds.y !== 'undefined'
              ? element.rootBounds.y
              : element.rootBounds.top;
          const isAbove = boundingClientRectY < rootBoundsY;
          // get index of intersecting element from DOM attribute
          const intersectingElemIdx = parseInt(
            element.target.getAttribute('data-index')
          );

          // record index as either above or below current index
          if (isAbove) aboveIndeces.push(intersectingElemIdx);
          else belowIndeces.push(intersectingElemIdx);
          //console.log("hi" + entry.intersectionRatio + " " + entry.target)
          //sideBar.current.querySelector('a.active').classList.remove("active");
          //sideBar.current.querySelector('a[href$=#' + id + ']').classList.add('active');

          //console.log(menuCategories)
        });

        // determine min and max fired indeces values (support for multiple elements firing at once)

        const minIndex = Math.min.apply(Math, belowIndeces);
        const maxIndex = Math.max.apply(Math, aboveIndeces);

        // determine how to adjust localActiveIndex based on scroll direction
        if (aboveIndeces.length > 0) {
          // scrolling down - set to max of fired indeces
          localActiveIndex = maxIndex;
        } else if (
          belowIndeces.length > 0 &&
          minIndex <= activeIndexRef.current
        ) {
          // scrolling up - set to minimum of fired indeces
          localActiveIndex = minIndex - 1 >= 0 ? minIndex - 1 : 0;
        }
        //console.log(activeSlideRef.current.classList)

        if (localActiveIndex !== activeIndexRef.current) {
          console.log('im in setstate');
          activeSlideRef.current.classList.remove(styles['active']);
          //activeSlideRef.current.classList.remove("active")
          setActiveIndex(localActiveIndex);
          activeSlideRef.current.classList.add(styles['active']);
          //activeSlideRef.current.classList.add("active")
        }
      },
      {
        // use -100px for when the navbar is placed, it'll check it earlier
        // 85
        threshold: 1.0,
        rootMargin:
          screenSizeBoolean || isItPhone
            ? '-100px 0px 0px 0px'
            : '-40px 0px 0px 0px',
      }
    );

    //const menuSections = menuRef.current.querySelectorAll(".menupage-body h2")
    // we need to find another way for this, this won't work if i put in a classname
    const menuSections = menuRef.current.querySelectorAll('h2');
    console.log('printing menusections');
    console.log(menuSections);

    menuSections.forEach((card) => {
      observer.observe(card);
    });
  }, [screenSizeBoolean]);

  //maybe stop the first render ask stack overflow
  //This may be firing when screen is big and it doesnt have scrollbar yet but it doesnt break the code
  useEffect(() => {
    //categoriesRefs.current[activeIndex].scrollIntoView({behavior: "smooth", inline: "start"})
    /*
    console.log("what is this " + categoriesRefs.current[activeIndex])
    if(categoriesRefs.current[activeIndex] !== undefined)
    {
      sideBar.current.scrollTo({left: categoriesRefs.current[activeIndex].offsetLeft, behavior: "smooth"})
      console.log("heiiiiiiiiiiii//////////////////")
      console.log(categoriesRefs.current[activeIndex])
    }
    */
    if (activeSlideRef.current) {
      console.log('im being trigereddddddddddddddddddddddd');
      console.log(activeSlideRef.current);
      //activeSlideRef.current.scrollIntoView({behavior: "smooth"})
      // 15 + 63, 63 is button length 20 is for margins
      console.log('guy');
      console.log(activeSlideRef.current.offsetLeft);
      sideBar.current.scrollTo({
        left: activeSlideRef.current.offsetLeft - 78,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  //const menuCategories = menuRef.current.querySelectorAll(".table-container")

  return (
    <div class={styles['menupage-container']}>
      <SideBar
        sideBar={sideBar}
        headerRefs={headerRefs}
        activeIndex={activeIndex}
        activeSlideRef={activeSlideRef}
        categoriesRefs={categoriesRefs}
      />
      <Menu menuRef={menuRef} headerRefs={headerRefs} />
      {/*Invisible buffer element so I can center it as if there were 3 elements with the 2 side by side equal widths*/}
      <div
        class={styles['menupagebody-filler']}
        style={{ width: '286px', flexShrink: 100 }}
      ></div>
    </div>
  );
}
