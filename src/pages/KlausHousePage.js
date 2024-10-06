import React, { Suspense, useTransition } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import Banner from '../components/Banner';


function Model(props) {
    const {scene} = useGLTF("/BibiModels/KlausHouse.glb");
    return <primitive object ={scene} {...props} />
}

const KlausHousePage = () => {

    return (
      <>
      <Banner/>
    
      <Suspense fallback={null}>

        <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
          <color attach="background" args={["#101010"]} />
          <PresentationControls speed={1.5} global zoom={.25} polar={[-0.1, Math.PI / 4]} azimuth={[-Infinity, Infinity]}>
            <Stage environment={"sunset"}>
            <Suspense fallback={null}>

            <Model/>
            </Suspense>
            </Stage>
          </PresentationControls>
        </Canvas>
        </Suspense>

   
        </>
      );

}

export default KlausHousePage;