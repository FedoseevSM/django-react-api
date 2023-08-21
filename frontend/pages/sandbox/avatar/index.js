import { Fragment } from "react"
import { Avatar } from "../../../components/Avatar/Avatar"

import styles from "../../../styles/Containers.module.sass"

const AvatarSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Avatar</h1>
        <div>
        <Avatar />
        </div>
        </div>
    </Fragment>
  )
}

export default AvatarSandbox
