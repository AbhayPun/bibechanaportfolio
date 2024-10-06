import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {

    return (
        <>
            <div className="flex justify-between items-start space-y-2 pt-3">

                <Link to = '/'>
                <div className="w-10 pl-8">
                    <span className="font-urbanist uppercase text-9xl  text-white-heat "> <a>Bibechana Pun</a> </span>
                </div>
                </Link>
                <div className="space-x-16 pr-12">

                    <span className="font-urbanist text-white-heat font-medium text-xl hover:underline hover:underline-offset-4">
                        <a href="mailto:bibechanapun@yahoo.co.uk">Email</a>
                    </span>
                    <span className="font-urbanist text-white-heat font-medium text-xl hover:underline hover:underline-offset-4">
                        <a href="https://www.instagram.com/bibechanapun/">Instagram</a>
                    </span>
                    <span className="font-urbanist text-white-heat font-medium text-xl hover:underline hover:underline-offset-4">
                        <a href="https://www.linkedin.com/in/bibechanapun/">Linkedin</a>
                    </span>
                </div>
                
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            width="100%" 
            height="24px" 
            role="img">

            <line  x1="35" y1="1" x2="1867" y2="1" 
             style= {{ fill: 'none', stroke: 'rgb(255,255,255)' , strokeWidth: '2'}} 
            shape-rendering="auto" />
        
                
                </svg>
            </div>
        </>
    )

}

export default Banner