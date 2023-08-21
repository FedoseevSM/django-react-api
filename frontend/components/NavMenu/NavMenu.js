import Link from 'next/link'
import { useState } from 'react'

import styles from "./NavMenu.module.sass"

export const NavMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

const showSubnav = (event) => {
    event.preventDefault();
    setSubnav(!subnav);
}

    return (
        <>
        <Link href={item.path}>
            <a onClick={item.subNav && showSubnav} className={styles.item}>
                <div className={styles.item__link}>
                <div className={styles.item__title}>
                {item.title}
            </div>
            <div className={styles.arrow}>
                {item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClosed : null}
            </div>
            </div>
            </a>
        </Link>
        {subnav && item.subNav.map((item, index) => {
            return (
                <Link href={item.path}>
            <a>
                <div className={styles.subItem}>
                <span className={styles.icon}>{item.icon}</span>
                {item.title}
            </div>
            </a>
        </Link>
            )
        })}
    </>
    )
}