import styles from './MenuPageBody.module.css';
import SideBar from './SideBar';
import Menu from './Menu';
import { useRef, useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { useMediaQuery } from 'react-responsive';

export default function MenuPageBody() {
  const menuRef = useRef(null);
  const sideBar = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const headerRefs = useRef([]);
  const categoriesRefs = useRef([]);
  headerRefs.current = new Array(16);
  categoriesRefs.current = new Array(16);

  activeIndexRef.current = activeIndex;

  smoothscroll.polyfill();

  // isItPhone will change to true or false whenever the screen changes past 815px width in either direction
  const isItPhone = useMediaQuery(
    { maxWidth: 815 }
  );

  // when you put this logic in a seperate file, just have the sidebar expose the ref or pass in the ref a parameter to custom hook 
  useEffect(() => {
    // when the component mounts we want to add an active class to the activeIndexRef element in categoriesRef
    // The initial state will be 0 when this runs for the first time but if this useEffect function runs again
    // when the user changes the screen, the activeIndexRef won't be 0, it will be the current value when the screen changed.
    categoriesRefs.current[activeIndexRef.current].classList.add(
      styles['active']
    );

    // this takes a callback function and options
    // the callback gets called everytime something you are observing changes
    // the callback function takes in a list of entries
    // and the list of entries are all the things that have changed, that have intersected or unintersected.
    const observer = new IntersectionObserver(
      (entries) => {
        // current index must be memoized or tracked outside of function for comparison
        let localActiveIndex = activeIndexRef.current;

        // track which elements register above or below the document's current position
        const aboveIndeces = [];
        const belowIndeces = [];

        // So if you scroll really slowly, you don't need a for loop because it'll register 1 element or a list of 1 element
        // however if you scroll really fast or you jump to a section of a page without scrolling and you have 3 elements on your screen,
        // we'll need to check all 3 of those elements and we can do some logic on all 3 with a list.
        entries.forEach((element) => {
          // position of the top of the element as the element changes to intersect the viewport or leave the viewport
          const boundingClientRectTop = element.boundingClientRect.top;

          // position of the top of the viewport. This will be the same value for all elements
          // It will use the value in rootMargin, defined in the options argument for IntersectionObserver below
          const rootBoundsTop = element.rootBounds.top;

          // checks if intersecting element is above the viewpor
          const isAbove = boundingClientRectTop < rootBoundsTop;

          // get index of intersecting element from custom created DOM attribute: 'data-index'
          const intersectingElemIdx = parseInt(
            element.target.getAttribute('data-index')
          );

          // if the element is above, add index to above array
          // if the element is below, add index to below array
          if (isAbove) aboveIndeces.push(intersectingElemIdx);
          else belowIndeces.push(intersectingElemIdx);
        });

        // determine min and max fired indeces values (support for multiple elements firing at once)
        // gets the min value of the below array and max value of max array if applicable
        // we only care about the closest index value to the intersecting element from the top and bottom
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

        // if the localActiveIndex we calculate here is different than the current Active Index then we change the active class
        if (localActiveIndex !== activeIndexRef.current) {
          categoriesRefs.current[activeIndexRef.current].classList.remove(
            styles['active']
          );
          // we change the current active index before we add to it after
          setActiveIndex(localActiveIndex);
          categoriesRefs.current[activeIndexRef.current].classList.add(
            styles['active']

          );

        }
      },
      {
        // use -100px for when the navbar is placed, it'll check it earlier
        // 85
        root: null, // by default the root will be the viewport
        // first checks if on desktop or mobile before setting the viewport margins
        // because the mobile viewport has the menu bar on top so we need to increase the viewport.
        // So Positive margin values will EXTEND the viewport like stretch it more above and below out of view
        // So entries will intersect earlier. Negative values will SHRINK the viewport.
        rootMargin: isItPhone ? '-100px 0px 0px 0px' : '-40px 0px 0px 0px', 
        threshold: 1.0, // the percentage of the element to be shown for it to be counted as "intersecting"
      }
    );

    //const menuSections = menuRef.current.querySelectorAll(".menupage-body h2")
    // we need to find another way for this, this won't work if i put in a classname
    // get the list of header elements
    // we are not manipulating the DOM with this function so it is ok to use
    const menuSections = menuRef.current.querySelectorAll('h2');

    // calls the observe method with each of the elements to start observing them.
    menuSections.forEach((card) => {
      observer.observe(card);
    });
  }, [isItPhone]);
  // we will need to rerun the useEffect whenever isItPhone changes
  // because it is now either desktop or mobile and we need a new Intersection Observer object
  // to have new rootMargins that match the new screen size viewport

  // we will optimize this later to only run if isItPhone is true
  // we could maybe just use an if statement
  useEffect(() => {
    // only thing i may worry about is whether to check if categoriesRefs.current[activeIndexRef.current]
    // is null or undefined on first cast with if statement
    if (isItPhone) {
      // scrollTo scrolls to a particular set of coordinates inside an element
      sideBar.current.scrollTo({
        // the 78 accounts for the categories bar mobile button width which is 73 + 5 more for buffer room
        left: categoriesRefs.current[activeIndexRef.current].offsetLeft - 78,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  //const menuCategories = menuRef.current.querySelectorAll(".table-container")

  return (
    <div className={styles['menupage-container']}>
      <SideBar
        sideBar={sideBar}
        headerRefs={headerRefs}
        activeIndex={activeIndex}
        categoriesRefs={categoriesRefs}
      />
      <Menu menuRef={menuRef} headerRefs={headerRefs} />
      {/*Invisible buffer element so I can center it as if there were 3 elements with the 2 side by side equal widths*/}
      <div
        className={styles['menupagebody-filler']}
        style={{ width: '286px', flexShrink: 100 }}
      ></div>
    </div>
  );
}
