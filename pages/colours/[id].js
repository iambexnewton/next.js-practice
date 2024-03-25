import Splash from "/comps/Splash.js";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:4000/userSets");
  const data = await response.json();

  const paths = data.map((set) => {
    return {
      params: { id: `${set.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/userSets/${params.id}`);
  const data = await (await response).json();

  return {
    props: { set: data },
  };
};

const Details = ({ set }) => {
  return (
    <div>
      {console.log(set)}
      <h1>{set.name}</h1>
      <Splash fillColor={set.color} />
      {/* <p>{ninja.website}</p>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p> */}
    </div>
  );
};

export default Details;
