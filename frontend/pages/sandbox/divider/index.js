import { Fragment } from "react"
import { Divider } from "../../../components/Divider/Divider"

import styles from "../../../styles/Containers.module.sass"

const DividerSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Divider</h1>
        <div>
        <Divider/>
        </div>
        </div>
    </Fragment>
  )
}

export default DividerSandbox
