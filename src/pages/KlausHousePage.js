import React, { Suspense, useState} from "react";
import { Canvas } from "@react-three/fiber";
import {Center,Environment, OrbitControls  } from "@react-three/drei";
import Banner from '../components/Banner';
import { useControls } from 'leva' 
import {Model} from '../components/KlausHouse'


function GUI({ onPresetChange }) {
  const { preset } = useControls({
    preset: {
      value: 'none',
      options: ['none', 'apartment', 'city', 'dawn', 'forest', 'lobby', 'night', 'park', 'studio', 'sunset', 'warehouse']
    }
  });

  onPresetChange(preset);

  return null; 
}


const KlausHouse = () => {
  const [selectedPreset, setSelectedPreset] = useState('none');
    return (
      <>
      <Banner/>
        <div className="h-screen px-9">
      <Suspense fallback={null}>
      <Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows camera={{ position: [4, 0, 6], fov: 80 }}>
      {selectedPreset === 'none' && (
              <>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              </>
            )}
      <group position={[0, -2.8, 0]}>
        <Center top>
          <Model />
        </Center>
      </group>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      {selectedPreset !== 'none' && <Environment preset={selectedPreset} background />}

    </Canvas>
    </Suspense>
    </div>
          
          <GUI onPresetChange={setSelectedPreset}/>

        </>
    )
}

export default KlausHouse;