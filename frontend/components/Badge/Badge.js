import classNames from "classnames"

import styles from "./Badge.module.sass"

export const Badge = ({children, value, circle, className, ...attrs}) => {

    const classes = classNames(
        styles.badge,
        styles[className]
    )

    return (
        <div className={styles.block}>
        <span className={classes}>
            { value }
        </span>
        {children}
        </div>
    )
}