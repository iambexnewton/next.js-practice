import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import Splash from "/comps/Splash.js";

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

      {paint.map((paint) => (
        <>
          <Link href={"/listing/" + paint.id} key={paint.id}>
            <div className={styles.single}>
              <h3>{paint.name}</h3>
              <Splash fillColor={paint.color} />
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Listing;
