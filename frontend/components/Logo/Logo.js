import styles from "./Logo.module.sass"

export const Logo = () => {
  return (
    <a href="/">
      <img className={styles.logo} src="images/logo.webp" />
    </a>
  )
}
