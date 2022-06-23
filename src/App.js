// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import InfoProduct from "./pages/InfoProduct";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/register" element={<RegistrationPage/>} />
            <Route path="/infoproduct" element={<InfoProduct/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
