import {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MenuPageBody.module.css'

export default function SideBar(props) {
  const categories = ['Appetizers', 'Soups', 'Fried Rice', 'Lo Mein (Soft Noodles)', 'Chow Mein (Vegetables)',
  'Chop Suey (Vegetables)', 'Chicken', 'Pork', 'Beef', 'Shrimp', 'Vegetables', 'Egg Foo Young', 'Specialties', 
  'Family Special', 'Lunch Combination', 'Dinner Combination']

  const [width, setWidth] = useState("0")

  const isItPhone = useMediaQuery(
    {maxWidth : 815}
  );

  // scrolls the main screen to the header using the index
  const scroll = (i) => {
    if(isItPhone)
    {
      window.scrollTo({top: props.headerRefs.current[i].offsetTop - 92, behavior: "smooth"})
      setWidth("0")
    }
    else
      window.scrollTo({top: props.headerRefs.current[i].offsetTop - 20, behavior: "smooth"})
  }

  return (
    <div className={styles["sidebar"]}>
        <div className={styles["topBar"]}>
          <button className={styles["sideBar-button"]} onClick={() => setWidth("100%")}>
              <FontAwesomeIcon icon="fa-solid fa-bars" size="2x"/>
          </button>
          <h2>Categories</h2>
          <div className={styles["topBarList"]} ref={props.sideBar}>
            <ul>
            {categories.map((cat, i) =>
              <li key={i}>
                <button onClick={() => scroll(i)} ref={el => props.categoriesRefs.current[i] = el}>{cat}</button>
              </li>
            )}
            </ul>
          </div>
          <div className={styles["popup-menuCategories"]} style={{width: width}}>
            <button className={styles["close"]} onClick={() => setWidth("0")}>
              <FontAwesomeIcon icon="fa-solid fa-x" size="2x"/>
            </button>
            <ul>
              {categories.map((cat, i) => 
              <li key={i}>
                <button onClick={() => scroll(i)} >{cat}</button>
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
  )
}
