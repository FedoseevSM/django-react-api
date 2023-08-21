import Link from "next/link"

import styles from "./Avatar.module.sass"

export const Avatar = () => {

    return (
        <Link href="#">
        <a className={styles.profileLink}>
        <div className={styles.cover}>
          <img
            className={styles.avatar}
            src="/images/users/1/avatar.jpg"
          />
        </div>
        <svg width={0} height={0} className="clip-svg">
          <defs>
            <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
              <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
            </clipPath>
          </defs>
        </svg>
      </a>
      </Link>
    )
}