import React from 'react';
import Banner from '../components/Banner';
import GoneFishing from '../components/GoneFishing';
import Models from '../components/Models';



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
