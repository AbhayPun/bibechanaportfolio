import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuyScreamingPage from './pages/GuyScreamingPage'
import HandSculptPage from './pages/HandSculptPage';
import KlausHousePage from './pages/KlausHousePage';
import TheBearPage from './pages/TheBearPage';
import LandingPage from './pages/LandingPage';
import NoPage from './pages/NoPage';

export default function App() {
  return(  
  <div>
  <BrowserRouter>
      <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/TheBearPage" element={<TheBearPage />} />
          <Route path="/KlausHousePage" element={<KlausHousePage />} />
          <Route path="/HandSculptPage" element={<HandSculptPage />} />
          <Route path="/GuyScreamingPage" element={<GuyScreamingPage />} />
          <Route path ="*" element = {<NoPage/>}/>

      </Routes>
   </BrowserRouter> 
    
  </div>
)

}