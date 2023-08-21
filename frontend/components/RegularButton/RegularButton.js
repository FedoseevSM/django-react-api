import classNames from "classnames"
import Link from "next/link"

import styles from "./RegularButton.module.sass"

export const RegularButton = ({children, onClick, className, disabled, active, icon, count, ...attrs}) => {

const classes = classNames(
    styles.btn,
    styles[className],
    {active}
)

    return (
        <Link href="#">
        <a
            {...attrs}
            className={classes}
            onClick={onClick}
        >
            {icon}
            {children}
            {count && (<span className={styles.count}>
                {count}
            </span>)}
        </a>
        </Link>
    )
}