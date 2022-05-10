import {useState, useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MenuPageBody.module.css'

export default function SideBar(props) {
  const categories = ['Appetizers', 'Soups', 'Fried Rice', 'Lo Mein (Soft Noodles)', 'Chow Mein (Vegetables)',
  'Chop Suey (Vegetables)', 'Chicken', 'Pork', 'Beef', 'Shrimp', 'Vegetables', 'Egg Foo Young', 'Specialties', 
  'Family Special', 'Lunch Combination', 'Dinner Combination']

  const [screenSizeBoolean, setScreenSizeBoolean] = useState()
  const [width, setWidth] = useState("0")

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    setScreenSizeBoolean(matches)
    console.log("screen changed")
    console.log(matches)
  }

  const isItPhone = useMediaQuery(
    { maxWidth : 815 }, undefined,  handleMediaQueryChange
  );

  function scroll(i)
  {
    //props.headerRefs.current[i].scrollIntoView({behavior: "smooth"})
    //props.headerRefs.current[i].scrollIntoView()
    // + 72 to 20
    console.log("screen size boolean //////////////")
    console.log(screenSizeBoolean)
    console.log(isItPhone)
    if(screenSizeBoolean || isItPhone)
    {
      window.scrollTo({top: props.headerRefs.current[i].offsetTop - 92, behavior: "smooth"})
      setWidth("0")
    }
      //setTimeout(window.scrollTo({top: props.headerRefs.current[i].offsetTop - 92, behavior: "smooth"}), 100)
    else
      window.scrollTo({top: props.headerRefs.current[i].offsetTop - 20, behavior: "smooth"})
    console.log("number" + props.headerRefs.current[i].offsetTop)
    
    /*
    if(isBigScreen)
      //props.categoriesRefs.current[i].scrollIntoView({behavior: "smooth", inline: "start"})
      //props.categoriesRefs.current[i].scrollIntoView({ inline: "start"})
      props.sideBar.current.scrollTo({left: props.categoriesRefs.current[i].offsetLeft, behavior: "smooth"})
    */
  }

  return (
    <div class={styles["sidebar"]}>
        <div class={styles["topBar"]}>
          <button class={styles["sideBar-button"]} onClick={() => setWidth("100%")}>
              <FontAwesomeIcon icon="fa-solid fa-bars" size="2x"/>
          </button>
          <h2>Categories</h2>
          <div class={styles["topBarList"]} ref={props.sideBar}>
            <ul>
            {categories.map((cat, i) =>
              <li>
                <button onClick={() => scroll(i)} ref={i === props.activeIndex ? props.activeSlideRef : el => props.categoriesRefs.current[i] = el}>{cat}</button>
              </li>
            )}
            </ul>
          </div>
          <div class={styles["popup-menuCategories"]} style={{width: width}}>
            <button class={styles["close"]} onClick={() => setWidth("0")}>
              <FontAwesomeIcon icon="fa-solid fa-x" size="2x"/>
            </button>
            <ul>
              {categories.map((cat, i) => 
              <li>
                <button onClick={() => scroll(i)} >{cat}</button>
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
  )
}
