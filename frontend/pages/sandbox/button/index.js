import { Fragment } from "react"
import * as FcIcons from "react-icons/fc"

import { RegularButton } from "../../../components/RegularButton/RegularButton"
import { RoundButton } from "../../../components/RoundButton/RoundButton"
import styles from "../../../styles/Containers.module.sass"

const ButtonSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Regular Button</h1>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: Favorites")}
            type="submit"
            className="gradient"
            icon={<FcIcons.FcTreeStructure />}
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
            icon={<FcIcons.FcTreeStructure />}
          >
            Recently Played
          </RegularButton>
        </div>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: Create account")}
            type="submit"
            className="primary_l"
            icon={<FcIcons.FcTreeStructure />}
          >
            Create account
          </RegularButton>
        </div>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: See all")}
            type="submit"
            className="secondary"
          >
            See all
          </RegularButton>
        </div>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: Free Spin")}
            type="submit"
            className="opacity"
          >
            Free Spin
          </RegularButton>
        </div>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: Free To Play")}
            type="submit"
            className="italic"
          >
            Free To Play
          </RegularButton>
        </div>
        <div>
          <RegularButton
            onClick={() => console.log("Клик: Play Now")}
            type="submit"
            className="primary_m"
          >
            Play Now
          </RegularButton>
        </div>
        <h1>Round Button</h1>
        <div>
          <RoundButton
            onClick={() => console.log("Клик: All Games")}
            className="primary"
            icon={<FcIcons.FcTreeStructure />}
          >
            All Games
          </RoundButton>
        </div>
      </div>
    </Fragment>
  )
}

export default ButtonSandbox
