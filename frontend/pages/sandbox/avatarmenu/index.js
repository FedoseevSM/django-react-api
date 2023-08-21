import { Fragment } from "react"
import { AvatarMenu } from "../../../components/AvatarMenu/AvatarMenu"

import styles from "../../../styles/Containers.module.sass"

const AvatarMenuSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Avatar Menu</h1>
        <div>
        <AvatarMenu />
        </div>
        </div>
    </Fragment>
  )
}

export default AvatarMenuSandbox
