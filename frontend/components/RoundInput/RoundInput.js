import classNames from "classnames"

import styles from "./RoundInput.module.sass"

export const RoundInput = ({placeholder, className, icon, ...attrs}) => {

const classes = classNames(
    styles.searchbar,
    styles[className]
)

    return (
        <div
            {...attrs}
            className={classes}
        >
        <div className={styles.flexsearch__input_wrapper}>
        <input
            className={styles.flexsearch__input}
            type="search"
            placeholder={placeholder}
        />
        </div>
        {icon && (<span className={styles.flexsearch__submit} type="submit">
        {icon}
        </span>)}
        </div>
    )
}