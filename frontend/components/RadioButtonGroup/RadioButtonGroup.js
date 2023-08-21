import classNames from "classnames"

import styles from "./RadioButtonGroup.module.sass"

export const RadioButtonGroup = ({children, className, ...attrs}) => {

const classes = classNames(
    styles.group,
    styles[className]
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