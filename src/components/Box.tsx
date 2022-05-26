import { useFrame } from "react-three-fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

type BoxPropsTupleKeys = "dimensions" | "boxPosition" | "afterTouchSize"

export interface BoxProps {
  props: {
    color: string;    
    wobbleSpeed: number;
    factor: number;
    rotateSpeed: number;
  } & Record<BoxPropsTupleKeys, [number, number, number]>;
}
 
export const Box: React.FC<BoxProps> = (boxProps): JSX.Element => {
  const { color, dimensions, boxPosition, factor, rotateSpeed, wobbleSpeed, afterTouchSize } = boxProps.props;
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += rotateSpeed;
  });
  const [afterTouch, setAfterTouch] = useState(false);

  const props = useSpring<{ scale: [x: number, y: number, z: number] }>({
    scale: afterTouch ? afterTouchSize : [1, 1, 1],
  });
  
  return (
    <>
      <shadowMaterial fog={false} attach="material" opacity={0.3} color="black" />
      <a.mesh position={boxPosition} ref={mesh} onClick={() => setAfterTouch(!afterTouch)} scale={props.scale} castShadow>
        <boxBufferGeometry attach="geometry" args={dimensions} />
        <MeshWobbleMaterial  color={color} speed={wobbleSpeed} attach="material" factor={factor} />
      </a.mesh>
    </>
  );
};
