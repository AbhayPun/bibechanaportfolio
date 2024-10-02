import React, { Suspense, useTransition } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const {scene} = useGLTF("/BibiModels/Guyscreamingmouthopensculpt.glb");
    return <primitive object ={scene} {...props} />
}
const HandSculptPage = () => {
    return (
        <Suspense fallback={null}>
  
        <Suspense fallback={null}>
          <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
            <color attach="background" args={["#101010"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
              <Stage environment={"sunset"}>
              <Suspense fallback={null}>
              <Model/>
              </Suspense>
              </Stage>
            </PresentationControls>
          </Canvas>
          </Suspense>
  
          </Suspense>
        );
  

}

export default HandSculptPage;