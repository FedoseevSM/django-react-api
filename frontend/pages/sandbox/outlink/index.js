import { Fragment } from "react"
import * as FcIcons from "react-icons/fc"

import { OutLink } from "../../../components/OutLink/OutLink"
import styles from "../../../styles/Containers.module.sass"

const OutLinkSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>Out Link</h1>
        <div>
        <OutLink href="/">
            Daily Tasks
        </OutLink>
        </div>
        <div>
        <OutLink href="http://google.com" target="_blank">
            1Wolf.bet.docs
        </OutLink>
        </div>
        </div>
    </Fragment>
  )
}

export default OutLinkSandbox
