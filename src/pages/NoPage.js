import React from "react";
import ErrorVideo from '../Assets/itsgoingtobeokaybutitsgoingtobedifferentdog.mp4'
const  NoPage = () => {
    return (
        <>
         <div className="full-screen">
        <h1 className="font-urbanist uppercase text-9xl  text-white-heat ">404: Page Not found</h1>
        <video  controls autoPlay loop muted>
      <source src={ErrorVideo} type="video/mp4"/>
        </video>
        </div>
        </>
    );

}

export default NoPage;