import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Placeholder from "./Placeholder";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.logo}>
        <Placeholder />
      </div>

      <section className={styles.navbarArea}>
        <Link href='/'>
          <a className={styles.navbarItem}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={styles.navbarItem}>About</a>
        </Link>
        <Link href='colours'>
          <a className={styles.navbarItem}>Colours</a>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
