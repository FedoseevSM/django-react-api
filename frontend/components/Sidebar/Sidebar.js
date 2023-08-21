import { NavMenu } from "../NavMenu/NavMenu"
import { NavMenuData } from "../NavMenu/NavMenuData"
import { Divider } from "../Divider/Divider"
import { OutLink } from "../OutLink/OutLink"
import { RegularButton } from "../RegularButton/RegularButton"

import styles from "./Sidebar.module.sass"

import { FcTreeStructure } from "react-icons/fc"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <RegularButton
          onClick={() => console.log("Клик: Favorites")}
          type="submit"
          className="gradient"
          icon={<FcTreeStructure />}
          count="5"
        >
          Favorites
        </RegularButton>
      </div>
      <div>
        <RegularButton
          onClick={() => console.log("Клик: Recently Played")}
          type="submit"
          className="solid"
          icon={<FcTreeStructure />}
        >
          Recently Played
        </RegularButton>
      </div>
      <div className={styles.navmenu}>
      {NavMenuData.map((item, index) => {
        return <NavMenu item={item} key={index} />
      })}
      </div>
      <Divider />
      <div className={styles.outlinks}>
        <div>
          <OutLink href="/">Daily Tasks</OutLink>
        </div>
        <div>
          <OutLink href="http://google.com" target="_blank">
            1Wolf.bet.docs
          </OutLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
