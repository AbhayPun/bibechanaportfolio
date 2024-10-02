import React from 'react';
import Banner from '../components/Banner';
import GoneFishing from '../components/GoneFishing';
import Models from '../components/Models';

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



const LandingPage =() => {

    return (
        <>
  <Banner/>

  <GoneFishing/>
    <div className='pt-10'>
  <Models/>
    </div>

    
  </>
    )
}
export default LandingPage
