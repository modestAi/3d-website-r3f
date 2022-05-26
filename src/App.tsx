import { GlobalStyle } from "./styles/Global.style";
import { Canvas } from "react-three-fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import AllBoxMesh from "./components/AllBoxMesh";
import Header from "./components/Header";

softShadows();

const App = () => {
  return (
    <>
      <Header />
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 200, 0]} intensity={2} />
        <pointLight position={[200, 10, -20]} intensity={0.5} />
        <pointLight position={[-200, -10, 20]} intensity={1.5} />
        <group>
          <AllBoxMesh />
        </group>
        <OrbitControls enablePan={true} minDistance={1} maxDistance={5} autoRotateSpeed={1.5} autoRotate />
      </Canvas>
      <GlobalStyle />
    </>
  );
};

export default App;
