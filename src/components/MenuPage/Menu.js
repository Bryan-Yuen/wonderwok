import React from 'react';
import * as menu from '../../menu_items/MenuExports.js';
import styles from './MenuPageBody.module.css';

export default function Menu(props) {
  return (
    <div className={styles['menupage-body']} ref={props.menuRef}>
      <h1>Menu</h1>

      <h2
        id="appetizers"
        data-index="0"
        ref={(el) => (props.headerRefs.current[0] = el)}
      >
        Appetizers
      </h2>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.appetizers.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td className={styles['ptQtJumboColumnWidth']}>
                  {item.smallColumnPrice}
                </td>
                <td className={styles['ptQtJumboColumnWidth']}>
                  {item.largeColumnOrSingleColumnPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="soups"
        data-index="1"
        ref={(el) => (props.headerRefs.current[1] = el)}
      >
        Soups
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.soups.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="friedRice"
        data-index="2"
        ref={(el) => (props.headerRefs.current[2] = el)}
      >
        Fried Rice
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Jumbo</th>
            </tr>
          </thead>
          <tbody>
            {menu.friedRice.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
                <td>{item.jumboPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="loMein"
        data-index="3"
        ref={(el) => (props.headerRefs.current[3] = el)}
      >
        Lo Mein (Soft Noodles)
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.loMein.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="chowMein"
        data-index="4"
        ref={(el) => (props.headerRefs.current[4] = el)}
      >
        Chow Mein (Vegetables)
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.chowMein.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="chopSuey"
        data-index="5"
        ref={(el) => (props.headerRefs.current[5] = el)}
      >
        Chop Suey (Vegetables)
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.chopSuey.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="chicken"
        data-index="6"
        ref={(el) => (props.headerRefs.current[6] = el)}
      >
        Chicken
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.chicken.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="pork"
        data-index="7"
        ref={(el) => (props.headerRefs.current[7] = el)}
      >
        Pork
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.pork.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="beef"
        data-index="8"
        ref={(el) => (props.headerRefs.current[8] = el)}
      >
        Beef
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.beef.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="shrimp"
        data-index="9"
        ref={(el) => (props.headerRefs.current[9] = el)}
      >
        Shrimp
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.shrimp.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="vegetables"
        data-index="10"
        ref={(el) => (props.headerRefs.current[10] = el)}
      >
        Vegetables
      </h2>
      <div className={styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className={styles['ptQtJumboColumnWidth']}>Pt.</th>
              <th className={styles['ptQtJumboColumnWidth']}>Qt.</th>
            </tr>
          </thead>
          <tbody>
            {menu.vegetables.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.ptPrice}</td>
                <td>{item.qtPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="eggFooYoung"
        data-index="11"
        ref={(el) => (props.headerRefs.current[11] = el)}
      >
        Egg Foo Young
      </h2>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.eggFooYoung.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="specialties"
        data-index="12"
        ref={(el) => (props.headerRefs.current[12] = el)}
      >
        Specialties
      </h2>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.specialties.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="familySpecial"
        data-index="13"
        ref={(el) => (props.headerRefs.current[13] = el)}
      >
        Family Special
      </h2>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.familySpecial.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>
                    <ul>
                      <li>{item.item1}</li>
                      <li>{item.item2}</li>
                      <li>{item.item3}</li>
                      <li>{item.item4}</li>
                    </ul>
                  </b>
                </td>
                <td className={styles['familySpecialPrice']}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="lunch"
        data-index="14"
        ref={(el) => (props.headerRefs.current[14] = el)}
      >
        Lunch Combination
      </h2>
      <p>
        Avaiable Monday - Saturday 11:30AM - 3:00PM<br></br>
        Served with Turkey Fried Rice or White Rice.<br></br>
        You can change the rice to any other rice for $2.00 more.
      </p>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.lunch.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2
        id="dinner"
        data-index="15"
        ref={(el) => (props.headerRefs.current[15] = el)}
      >
        Dinner Combination
      </h2>
      <p>
        Served with Pork Fried Rice or White Rice and Egg Roll.<br></br>
        You can change the rice to any other rice for $2.00 more.
      </p>
      <div className={styles['table-container']}>
        <table>
          <tbody>
            {menu.dinner.map((item, i) => (
              <tr key={i}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
