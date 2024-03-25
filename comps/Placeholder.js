import Image from "next/image";
import placeholder from "../public/logo.png";

const Placeholder = (props) => {
  return (
    <Image
      src={placeholder}
      alt='Picture of the author'
      width='120px'
      height='100px'
    />
  );
};

export default Placeholder;
