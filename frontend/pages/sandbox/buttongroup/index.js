import { Fragment } from "react"
import * as FcIcons from "react-icons/fc"

import { ButtonGroup } from "../../../components/ButtonGroup/ButtonGroup"
import { RoundButton } from "../../../components/RoundButton/RoundButton"
import styles from "../../../styles/Containers.module.sass"

const ButtonGroupSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Button Group</h1>
        <ButtonGroup>
          <RoundButton
            onClick={() => console.log("Клик: All Games")}
            className="primary"
            icon={<FcIcons.FcTreeStructure />}
          >
            All Games
          </RoundButton>
          <RoundButton
            onClick={() => console.log("Клик: All Games")}
            className="primary"
            icon={<FcIcons.FcTreeStructure />}
          >
            All Games
          </RoundButton>
          <RoundButton
            onClick={() => console.log("Клик: All Games")}
            className="primary"
            icon={<FcIcons.FcTreeStructure />}
          >
            All Games
          </RoundButton>
        </ButtonGroup>
        </div>
    </Fragment>
  )
}

export default ButtonGroupSandbox
