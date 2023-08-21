import classNames from "classnames"

import styles from "./ButtonGroup.module.sass"

export const ButtonGroup = ({children, className, vertical, ...attrs}) => {

const classes = classNames(
    styles.btn_group,
    styles[className],
    styles[vertical]
)

    return (
        <div
            {...attrs}
            className={classes}
        >
            {children}
        </div>
    )
}