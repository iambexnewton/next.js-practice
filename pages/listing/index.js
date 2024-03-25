import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import Splash from "comps/Splash.js";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/userSets");
  const data = await response.json();

  return {
    props: { paint: data },
  };
};

const Listing = ({ paint }) => {
  console.log(paint);
  return (
    <div>
      <h1>List</h1>
      <Splash />
      {paint.map((paint) => (
        <Link href={"/listing/" + paint.id} key={paint.id}>
          <a className={styles.single}>
            <h3>{paint.name}</h3>
          </a>
        </Link>
      ))}
      {/* <Image src={"public/splash.svg"} alt='splash' layout='fill'></Image> */}
    </div>
  );
};

export default Listing;
