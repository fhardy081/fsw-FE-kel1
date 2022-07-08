import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import InfoProfil from "./pages/info-profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info-profil" element={<InfoProfil />} />
      </Routes>
      {/* <RegistrationPage/> */}
    </BrowserRouter>
  )
}

export default App;
