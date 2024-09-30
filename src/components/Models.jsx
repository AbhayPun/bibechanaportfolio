import React from 'react';
import CaricatureSculptTheBear from '../Assets/CaricatureSculptTheBearOriginal.webp';
import CharacterModellingDeadEndParanormalPark from '../Assets/CharacterModellingDeadEndParanormalPark.webp';
import ModellingKlaus from '../Assets/ModellingKlaus.webp';
import { useNavigate } from 'react-router-dom';
import GuyScreamingPage from '../pages/GuyScreamingPage'
import HandSculptPage from '../pages/HandSculptPage';
import KlausHousePage from '../pages/KlausHousePage';
import TheBearPage from '../pages/TheBearPage';
import { Link } from "react-router-dom";

const Models = () => {

  return (
    <div className="flex space-x-12 pr-12">
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
    </div>
  );
};

export default Models;
