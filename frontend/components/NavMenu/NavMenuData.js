import * as FaIcons from "react-icons/fa"
import * as FcIcons from "react-icons/fc";

import styles from "./NavMenu.module.sass"

export const NavMenuData = [
  {
    title: "Games",
    path: "#",
    icon: <FaIcons.FaAirbnb />,
    iconClosed: <FaIcons.FaAngleDown className={styles.downico} />,
    iconOpen: <FaIcons.FaAngleUp />,
    subNav: [
      {
        title: "Slot Game",
        path: "#",
        icon: <FcIcons.FcTreeStructure />,
      },
      {
        title: "Lottery",
        path: "#",
        icon: <FcIcons.FcStumbleupon />,
      },
      {
        title: "Table Game",
        path: "#",
        icon: <FcIcons.FcElectroDevices />,
      },
      {
        title: "Baccarat",
        path: "#",
        icon: <FcIcons.FcInspection />,
      },
      {
        title: "All Games",
        path: "#",
        icon: <FcIcons.FcGrid />,
      },
    ],
  },
  {
    title: "Live Casino",
    path: "#",
    icon: <FaIcons.FaAirbnb />,
    iconClosed: <FaIcons.FaAngleDown className={styles.downico} />,
    iconOpen: <FaIcons.FaAngleUp />,
    subNav: [
      {
        title: "Link Users",
        path: "#",
        icon: <FaIcons.FaAirbnb />,
      },
      {
        title: "Link Users",
        path: "#",
        icon: <FaIcons.FaAirbnb />,
      },
    ],
  },
  {
    title: "Sport",
    path: "/#link1",
    icon: <FaIcons.FaAirbnb />,
    iconClosed: <FaIcons.FaAngleDown className={styles.downico} />,
    iconOpen: <FaIcons.FaAngleUp />,
    subNav: [
      {
        title: "Link Users",
        path: "#",
        icon: <FaIcons.FaAirbnb />,
      },
      {
        title: "Link Users",
        path: "#",
        icon: <FaIcons.FaAirbnb />,
      },
    ],
  }
]
