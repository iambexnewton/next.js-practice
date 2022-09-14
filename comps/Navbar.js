import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Placeholder from "./Placeholder";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.logo}>
      <Placeholder />
      </div>
      <div className={styles.navbarArea}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="listing">
        <a>Listing</a>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
