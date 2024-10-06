import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, Caustics } from "@react-three/drei";
import Banner from '../components/Banner';
import { useControls } from 'leva';
import { Model } from '../components/Guyscreamingmouthopensculpt';

function GUI({ onPresetChange }) {
  const { preset, intensity } = useControls({
    preset: {
      value: 'none',
      options: ['none', 'apartment', 'city', 'dawn', 'forest', 'lobby', 'night', 'park', 'studio', 'sunset', 'warehouse']
    },
    intensity: {
      value: 1,
      min: 0,
      max: 2,
      step: 0.1,
    },
  });

  onPresetChange(preset, intensity);
  return null;
}

const GuyScreamingPage = () => {
  const [selectedPreset, setSelectedPreset] = useState('none');
  const [selectedIntensity, setIntensity] = useState(1);

  const handlePresetChange = (preset, intensity) => {
    setSelectedPreset(preset);
    setIntensity(intensity);
  };

  return (
    <>
      <Banner />
      <div className="h-screen px-9">
        <Suspense fallback={null}>
          <Canvas 
            gl={{ antialias: false, preserveDrawingBuffer: true }} 
            shadows 
            camera={{ position: [0, 0, 10], fov: 50 }} // Adjust the camera position and FOV
          >
            {/* Conditional lighting if no preset is selected */}
            {selectedPreset === 'none' && (
              <>
                <ambientLight intensity={selectedIntensity} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              </>
            )}

            <group position={[0, -1, 0]} scale={0.5}> {/* Adjust position and scale */}
              <Center top>
                {/* Apply the shiny material to the model */}
                <mesh>
                  <Model />
                  <meshPhysicalMaterial
                    color="white"
                    metalness={4}
                    roughness={4}
                    clearcoat={4}
                    reflectivity={4}
                  />
                </mesh>
                <Caustics
                  color="#FF8F20"
                  position={[0, -0.5, 0]}
                  lightSource={[5, 5, -10]}
                  worldRadius={0.01}
                  ior={1.2}
                  intensity={0.005}
                />
              </Center>
            </group>

            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
            {selectedPreset !== 'none' && <Environment preset={selectedPreset} background environmentIntensity={selectedIntensity} />}
          </Canvas>
        </Suspense>
      </div>

      {/* GUI for controlling environment and intensity */}
      <GUI onPresetChange={handlePresetChange} />
    </>
  );
};

export default GuyScreamingPage;
