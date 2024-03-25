const Splash = ({ fillColor }) => {
  const blobs = [
    {
      "id": "1",
      "path":
        "M1912 1209c27-319-72-699-318-882-187-139-462-224-785-204S85 468 84 880c0 455 481 345 636 484s139 514 477 516c386 3 693-420 715-671Z",
    },
    {
      "id": "2",
      "path":
        "M70.93 687.44C94 439 234.2 293.95 381.02 188.24 527.84 82.53 887.27-.87 1159.77 82.53c272.5 83.4 553.55 115.11 673.78 302.45 120.23 187.35 114.36 417.56 87.35 671.27-27.02 253.71-150.35 364.12-335.93 543.83-185.58 179.71-590.81 176.19-973.73 106.89C228.33 1637.67 257 1468 149.63 1259.45c-91.86-178.42-96.18-383.72-78.7-572.02Z",
    },
  ];

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 2000 2000'
      width='48'
      height='48'
      fill={fillColor}
    >
      {blobs.map((blob) => (
        <path key={blob.id} d={`${blob.path}`} />
      ))}
    </svg>
  );
};

export default Splash;
