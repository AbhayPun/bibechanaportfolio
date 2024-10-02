import React from "react";

const GoneFishing = () => {
  return (
    <div>
      <div className="flex flex-wrap px-8">
        <div className="w-full md:w-2/3 pr-4"> {/* Added padding-right to separate from text */}
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Gone Fishing Trailer"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/JRj_WkbzW8c?autoplay=0&mute=0&controls=1&theme=dark&html5=1&vq=hd1080"
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-start"> {/* Ensure the text is aligned at the top */}
          <span className="font-urbanist text-white-heat font-medium text-lg font-bold">
            GONE FISHING
          </span>
          <p className="font-urbanist text-white-heat font-medium mt-4">
            Gone Fishing is a 3D animated short film created as my final project
            for university. Created independently in Blender, the film is a
            retrospective narrative that highlights some of my fondest memories
            from my childhood.
          </p>
          <p className="font-urbanist text-white-heat font-medium mt-4">
            Based off of the days out to the beach with my family when I was
            younger. Everything that takes place in the film is inspired by real
            life events and memories I have from those trips. From the fruitless
            attempts at fishing to the hours spent lounging about in the sun.
          </p>
          <p className="font-urbanist text-white-heat font-medium mt-4">
            Whilst making this film I experimented with making it as 'un-3D' as I
            could. This meant utilizing Blender's 2D animation tool 'Greasepencil'
            and exploring new ways it could be applied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoneFishing;
