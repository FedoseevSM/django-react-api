import { signOut, useSession, signIn } from "next-auth/react"

import classNames from "classnames"

import { FaSearch, FaArrowLeft } from "react-icons/fa"
import { AvatarMenu } from "../AvatarMenu/AvatarMenu"
import { RoundInput } from "../RoundInput/RoundInput"
import { RadioButtonGroup } from "../RadioButtonGroup/RadioButtonGroup"
import { RoundButton } from "../RoundButton/RoundButton"
import { RegularButton } from "../RegularButton/RegularButton"

import { TbNumber7 } from "react-icons/tb"
import { BiFootball, BiWallet } from "react-icons/bi"
import { FaBtc } from "react-icons/fa"

import styles from "./Header.module.sass"
import { Logo } from "../Logo/Logo"

const Header = () => {
  const { data: session } = useSession()
    return (
        <header className={styles.navbar}>
        <div className={classNames(styles.navbar__inner, styles.container)}>
            <div className={styles.navbar__left}>
          <div className={classNames(styles.block, styles.logo_block)}>
            <div>
              <a href="#" className={styles.arrow}>
                <FaArrowLeft />
              </a>
            </div>
            <div>
              <Logo />
            </div>
          </div>
          </div>
          <div className={styles.navbar__right}>
          <div className={classNames(styles.block, styles.gaming_block)}>
            <div>
            <RadioButtonGroup>
              <RoundButton className="primary" icon={<TbNumber7 />}>
                Gaming
              </RoundButton>
              <RoundButton icon={<BiFootball />}>
                Sport
              </RoundButton>
            </RadioButtonGroup>
            </div>
            <RoundInput placeholder="Search for Games" icon={<FaSearch />} />
          </div>

          <div className={classNames(styles.block, styles.profile_block)}>
          <div>
          <RadioButtonGroup>
              <RoundButton icon={<FaBtc />}>
                <p>0<span className={styles.walletbalance}>.000000</span></p>
              </RoundButton>
              <RoundButton className="primary" icon={<BiWallet />}>
                Wallet
              </RoundButton>
            </RadioButtonGroup>
          </div>
          {session ? (
          <a onClick={() => signOut()}><AvatarMenu /></a>
        ) : (
          <RegularButton onClick={() => signIn()} className="primary_l">Sign In</RegularButton>
        )}
          {/* {session ? (
          <button onClick={() => signOut()}>Log out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )} */}
        </div>
        </div>
        </div>
      </header>
    )
}

export default Header