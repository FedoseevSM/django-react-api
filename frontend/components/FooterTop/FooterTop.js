import { Logo } from "../Logo/Logo"
import { Divider } from "../Divider/Divider"

import Link from "next/link"
import classNames from "classnames"

import { 
  FaFlagUsa, 
  FaAngleDown,
  FaBtc,
  FaEthereum,
  FaTelegramPlane,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaFacebookF
  } from "react-icons/fa"

import {
  SiDash,
  SiLitecoin
} from "react-icons/si"

import styles from "./FooterTop.module.sass"

const FooterTop = () => {
  return (
    <>
    <div className={styles.footertop}>
      <div className={styles.one}>
        <div className={styles.onetop}>
          <Logo />
          <div className={styles.language}>
            <FaFlagUsa />
            <span>EN</span>
            <FaAngleDown className={styles.downico} />
          </div>
        </div>
        <p>
          <span className={styles.onetopaccent}>1Wolf.bet</span> ex veniam do
          elit laborum quis sint qui. Voluptate exercitation labore non mollit
          Lorem fugiat Lorem anim excepteur magna qui laboris labore aliquip.
          Voluptate enim qui et et dolore laborum sit sit consectetur sunt
          occaecat tempor magna.
        </p>
      </div>
      <div className={styles.two}>
        <div className={styles.two_item}>
          <h2 className={classNames(styles.footertop_title, styles.two_title)}>
            iGaming
          </h2>
          <ul className={styles.two_list}>
            <li className={styles.two_link}>
              <Link href="/">
                <a>All Games</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Loterry</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Slots</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.two_item}>
          <h2 className={classNames(styles.footertop_title, styles.two_title)}>
            Promotions
          </h2>
          <ul className={styles.two_list}>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Deposit</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Returns</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.two_item}>
          <h2 className={classNames(styles.footertop_title, styles.two_title)}>
            About Us
          </h2>
          <ul className={styles.two_list}>
            <li className={styles.two_link}>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.two_item}>
          <h2 className={classNames(styles.footertop_title, styles.two_title)}>
            Help
          </h2>
          <ul className={styles.two_list}>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Live Support</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
            <li className={styles.two_link}>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.three}>
        <div className={styles.threetop}>
          <Logo />
          <Logo />
        </div>
        <p>
          Ex veniam do elit laborum quis sint qui. Voluptate exercitation labore
          non mollit Lorem fugiat Lorem anim excepteur magna qui laboris labore
          aliquip. Voluptate enim qui et et dolore laborum sit sit consectetur
          sunt occaecat tempor magna.
        </p>
      </div>
      <div className={styles.four}>
        <div className={styles.four_item}>
          <h3 className={classNames(styles.footertop_title, styles.four_title)}>Payment Methods</h3>
          <ul className={styles.four_list}>
            <li className={styles.four_link}><Link href="/"><a><FaBtc /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><SiDash /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><FaEthereum /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><SiLitecoin /></a></Link></li>
          </ul>
        </div>
        <div className={styles.four_item}>
          <h3 className={classNames(styles.footertop_title, styles.four_title)}>Follow Us</h3>
          <ul className={styles.four_list}>
            <li className={styles.four_link}><Link href="/"><a><FaTelegramPlane /></a></Link></li>
          <li className={styles.four_link}><Link href="/"><a><FaYoutube /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><FaTwitter /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><FaDiscord /></a></Link></li>
            <li className={styles.four_link}><Link href="/"><a><FaFacebookF /></a></Link></li>
          </ul>
        </div>
      </div>
    </div>
    {/* <Divider /> */}
    </>
  )
}

export default FooterTop
