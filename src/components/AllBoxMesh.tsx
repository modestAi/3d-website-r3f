import * as THREE from "three";
import { Box, BoxProps } from "./Box";
import { colorsArray } from "../assets/data/color";

const AllBoxMesh = () => {
  const NUM = getRandIntInRange(30, 40);
  const box: BoxProps[] = new Array(NUM).fill(null).map(() => getProps());

  return (
    <>
      {box.map((e, i) => (
        <Box key={i + e.props.color} props={e.props} />
      ))}
    </>
  );
};

const getRandIntInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const genRandDecimal = (min: number, max: number, decimalPlaces: number) => {
  const num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
  return num;
};

const getColor = () => {
  const random = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[random].hex;
};

const getDimensions = (): [number, number, number] => {
  const min = 1;
  const max = 1;
  let x, y, z;
  x = y = z = getRandIntInRange(min, max);
  return [x, y, z];
};

const getPosition = (): [number, number, number] => {
  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => parseFloat(THREE.MathUtils.randFloatSpread(20).toFixed(1)));

  return [x, y, z];
};

const getFactor = () => genRandDecimal(0, 1, 1);

const getRotateSpeed = () => genRandDecimal(0.01, 0.02, 2);

const getWobbleSpeed = () => genRandDecimal(0, 2, 1);

const getAfterTouchSize = (): [number, number, number] => {
  const [x, y, z] = Array(3).fill(genRandDecimal(-0.5, 1.2, 1));
  return [x, y, z];
};


const getProps = () => {
  const color = getColor();
  const dimensions = getDimensions();
  const boxPosition = getPosition();
  const factor = getFactor();
  const rotateSpeed = getRotateSpeed();
  const wobbleSpeed = getWobbleSpeed();
  const afterTouchSize = getAfterTouchSize();
  const props: BoxProps = {
    props: {
      color,
      dimensions,
      boxPosition,
      factor,
      rotateSpeed,
      wobbleSpeed,
      afterTouchSize,
    },
  };
  console.log(props.props);
  return props;
};

export default AllBoxMesh;
