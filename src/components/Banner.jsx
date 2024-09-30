import React from "react";

const Banner = () => {



    return (
        <>
            <div className="flex justify-between items-start space-y-2 pt-3">

                <div className="w-10 pl-8">
                    <span className="font-urbanist uppercase text-7xl  text-white-heat"> <a>Bibechana Pun</a> </span>
                </div>

                <div className="space-x-12 pr-12">

                    <span className="font-urbanist text-white-heat font-medium text-lg hover:underline">
                        <a href="mailto:bibechanapun@yahoo.co.uk">Email</a>
                    </span>
                    <span className="font-urbanist text-white-heat font-medium text-lg hover:underline">
                        <a href="https://www.instagram.com/bibechanapun/">Instagram</a>
                    </span>
                    <span className="font-urbanist text-white-heat font-medium text-lg hover:underline">
                        <a href="https://www.linkedin.com/in/bibechanapun/">Linkedin</a>
                    </span>
                </div>
                
            </div>

            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100% 100vh" 
  width="200" 
  height="100" 
  class="icon"
>
  <line x1="10" y1="25" x2="100" y2="25" stroke="blue" stroke-width="2" />
</svg>
        </>
    )

}

export default Banner