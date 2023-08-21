import Link from "next/link"

import { FaAngleDown } from "react-icons/fa"

import { Avatar } from "../Avatar/Avatar"
import { Badge } from "../Badge/Badge"

import styles from "./AvatarMenu.module.sass"

export const AvatarMenu = () => {

    return (
      <div className={styles.profile}>
            <a href="#" className={styles.profileLink}>
              <FaAngleDown />
              Hector R.
            </a>
          <Badge>
            <Avatar />
          </Badge>
          </div>
    )
}