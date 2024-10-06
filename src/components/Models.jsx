import React from 'react';
import CaricatureSculptTheBear from '../Assets/CaricatureSculptTheBearOriginal.webp';
import CharacterModellingDeadEndParanormalPark from '../Assets/CharacterModellingDeadEndParanormalPark.webp';
import ModellingKlaus from '../Assets/ModellingKlaus.webp';
import Hand from '../Assets/Hand 6.png'
import GuyScreaming from '../Assets/GuyScreaming.webp'
import { Link } from "react-router-dom";

const Models = () => {

  return (
    <div className="flex flex-wrap ">
      <div className="relative w-full md:w-1/3 group">
      <Link to="/TheBearPage">
        <img 
          src={CaricatureSculptTheBear} 
          alt="Caricature Sculpt The Bear" 
          className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-50" 
        />
        <span className="font-urbanist text-white-heat font-medium text-lg absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Caricature Sculpt - The Bear
        </span>
        </Link>
      </div>

      <div className="relative w-full md:w-1/3 group ">
      
        <img 
          src={CharacterModellingDeadEndParanormalPark} 
          alt="Character Modelling Dead End Paranormal Park" 
          className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-50" 
        />
        <span className="font-urbanist text-white-heat font-medium text-lg absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Character Modelling - Dead End Paranormal Park
        </span>
      </div>

      <div className="relative w-full md:w-1/3 group ">
      <Link to="KlausHousePage">

        <img 
          src={ModellingKlaus} 
          alt="Modelling Klaus" 
          className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-50" 
        />
        <span className="font-urbanist text-white-heat font-medium text-lg absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Modelling - Klaus
        </span>
        </Link>
      </div>

      <div className="flex w-full justify-between">

      <div className="relative w-full md:w-1/3 group ">
      <Link to="HandSculptPage">

        <img 
          src={Hand} 
          alt="Hand" 
          className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-50" 
        />
        <span className="font-urbanist text-white-heat font-medium text-lg absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        Hand
        </span>
        </Link>
      </div>

      <div className="relative w-full md:w-1/3 group ">
      <Link to="GuyScreamingPage">

        <img 
          src={GuyScreaming} 
          alt="Guy Screaming" 
          className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-50" 
        />
        <span className="font-urbanist text-white-heat font-medium text-lg absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        Character Sculpt + Re-Topology
        </span>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Models;
