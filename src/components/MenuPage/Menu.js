import React from 'react'
import * as menu from '../../menu_items/MenuExports.js'
import styles from './MenuPageBody.module.css'

export default function (props) {
  return (
    <div class={styles["menupage-body"]} ref={props.menuRef}>
      <h1>Menu</h1>

      <h2 id='appetizers' data-index="0" ref={el => props.headerRefs.current[0] = el}>Appetizers</h2>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.appetizers.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td class={styles["ptQtJumboColumnWidth"]}>{item.smallColumnPrice}</td>
              <td class={styles["ptQtJumboColumnWidth"]}>{item.largeColumnOrSingleColumnPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='soups' data-index="1" ref={el => props.headerRefs.current[1] = el}>Soups</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.soups.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='friedRice' data-index="2" ref={el => props.headerRefs.current[2] = el}>Fried Rice</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Jumbo</th>
          </tr>
          {
            menu.friedRice.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
              <td>{item.jumboPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id="loMein" data-index="3" ref={el => props.headerRefs.current[3] = el}>Lo Mein (Soft Noodles)</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.loMein.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='chowMein' data-index="4" ref={el => props.headerRefs.current[4] = el}>Chow Mein (Vegetables)</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.chowMein.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='chopSuey' data-index="5" ref={el => props.headerRefs.current[5] = el}>Chop Suey (Vegetables)</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.chopSuey.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='chicken' data-index="6" ref={el => props.headerRefs.current[6] = el}>Chicken</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.chicken.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='pork' data-index="7" ref={el => props.headerRefs.current[7] = el}>Pork</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.pork.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='beef' data-index="8" ref={el => props.headerRefs.current[8] = el}>Beef</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.beef.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='shrimp' data-index="9" ref={el => props.headerRefs.current[9] = el}>Shrimp</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.shrimp.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='vegetables' data-index="10" ref={el => props.headerRefs.current[10] = el}>Vegetables</h2>
      <div class={styles["table-container"]}>
        <table>
          <tr>
            <th></th>
            <th class={styles["ptQtJumboColumnWidth"]}>Pt.</th>
            <th class={styles["ptQtJumboColumnWidth"]}>Qt.</th>
          </tr>
          {
            menu.vegetables.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.ptPrice}</td>
              <td>{item.qtPrice}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='eggFooYoung' data-index="11" ref={el => props.headerRefs.current[11] = el}>Egg Foo Young</h2>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.eggFooYoung.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.price}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='specialties' data-index="12" ref={el => props.headerRefs.current[12] = el}>Specialties</h2>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.specialties.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.price}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='familySpecial' data-index="13" ref={el => props.headerRefs.current[13] = el}>Family Special</h2>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.familySpecial.map((item) =>
            <tr>
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
              <td class={styles["familySpecialPrice"]}>{item.price}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='lunch' data-index="14" ref={el => props.headerRefs.current[14] = el}>Lunch Combination</h2>
      <p>
        Avaiable Monday - Saturday 11:30AM - 3:00PM<br></br>
        Served with Turkey Fried Rice or White Rice.<br></br>
        You can change the rice to any other rice for $2.00 more.
      </p>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.lunch.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.price}</td>
            </tr>
            )
          }
        </table>
      </div>

      <h2 id='dinner' data-index="15" ref={el => props.headerRefs.current[15] = el}>Dinner Combination</h2>
      <p>
        Served with Pork Fried Rice or White Rice and Egg Roll.<br></br>
        You can change the rice to any other rice for $2.00 more.
      </p>
      <div class={styles["table-container"]}>
        <table>
          {
            menu.dinner.map((item) =>
            <tr>
              <td><b>{item.name}</b></td>
              <td>{item.price}</td>
            </tr>
            )
          }
        </table>
      </div>

    </div>
  )
}
