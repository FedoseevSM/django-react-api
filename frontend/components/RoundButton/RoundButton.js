import classNames from "classnames"
import Link from "next/link"

import styles from "./RoundButton.module.sass"

export const RoundButton = ({children, onClick, className, disabled, active, icon, ...attrs}) => {

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
        </a>
        </Link>
    )
}