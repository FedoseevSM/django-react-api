import classNames from "classnames"
import Link from "next/link"

import {FaExternalLinkAlt} from "react-icons/fa"

import styles from "./OutLink.module.sass"

export const OutLink = ({children, onClick, target, href, ...attrs}) => {

const classes = classNames(
    styles.link
)

    return (
        <Link href={href}>
        <a
            {...attrs}
            className={classes}
            onClick={onClick}
            target={target}
        >
            {children}
            {target && (<FaExternalLinkAlt className={styles.icon} />)}
        </a>
        </Link>
    )
}