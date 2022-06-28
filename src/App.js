// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoProduct from "./pages/InfoProduct";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Homepage from "./pages/homepage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Homepage/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/register" element={<RegistrationPage/>} />
            <Route path="/infoproduct" element={<InfoProduct/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
