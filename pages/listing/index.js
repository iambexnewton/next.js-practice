import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { people: data },
  };
};

const Listing = ({ people }) => {
  return (
    <div>
      <h1>List</h1>
      {people.map((person) => (
        <Link href={"/listing/" + person.id} key={person.id}>
          <a className={styles.single}>
            <h3>{person.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Listing;
