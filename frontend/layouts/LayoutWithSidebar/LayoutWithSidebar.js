import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"

import styles from "./LayoutWithSidebar.module.sass"

const LayoutWithSidebar = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LayoutWithSidebar
